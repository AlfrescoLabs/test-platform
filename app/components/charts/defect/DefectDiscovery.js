import React from 'react'
import d3 from 'd3'
import { Link } from 'react-router'


class DefectTrend extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var margin = {
            top: 20,
            right: 20,
            bottom: 70,
            left: 40
          },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
          .rangeRound([height, 0]);

        var color = d3.scale.ordinal()
          .domain(['New CAT 1','New CAT 2'])
          .range(["#cc0000","#FF3333"]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(20, ",.1s")
            .tickSize(6, 0);

        var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left").tickFormat(d3.format("d"));


        var svg = d3.select("div#defect-discovery").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.json(this.props.url, function(error, data) {
          if (error) {
            console.log(error);
            throw error;
          }
          data.reverse() //Reverse data order as the api returns the last 60 entries asc
          data.forEach(function(d) {
            var y0 = 0;
            d.defects = color.domain().map(function(name) {
              var value = 0;
              if (name === 'New CAT 1') {
                value = d.open.blocker;
              }
              if (name === 'New CAT 2') {
                value = d.open.critical;
              }
              return {
                name: name,
                y0: y0,
                y1: y0 += value
              };
            });
            d.total = d.defects[d.defects.length - 1].y1;
          });

          x.domain(data.map(function(d) {
            return d.dateDisplay;
          }));
          y.domain([0, d3.max(data, function(d) {
            return d.total;
          })]);

          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");

          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

          var state = svg.selectAll(".date")
            .data(data)
            .enter().append("g")
            .attr("class", "g")
            .attr("transform", function(d) {
              return "translate(" + x(d.dateDisplay) + ",0)";
            });

          state.selectAll("rect")
            .data(function(d) {
              return d.defects;
            })
            .enter().append("rect")
            .attr("width", x.rangeBand())
            .attr("y", function(d) {
              return y(d.y1);
            })
            .attr("height", function(d) {
              return y(d.y0) - y(d.y1);
            })
            .style("fill", function(d) {
              return color(d.name);
            });

          var legend = svg.selectAll(".legend")
            .data(color.domain().slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
              return "translate(0," + i * 20 + ")";
            });

          legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

          legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) {
              return d;
            });

        });
    }
    render(){
        return(
            <div id="defect-discovery"></div>
        )
    }
}
export default DefectTrend
