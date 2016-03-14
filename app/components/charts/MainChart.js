import React from 'react'
import d3 from 'd3'

import Xaxis from './common/Xaxis'
import Yaxis from './common/Yaxis'
import Legend from './common/Legend'
class MainChart extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            width : 960,
            height : 500,
            x: "",
            y: "",
            url : this.props.url
        }
    }

    componentDidMount() {
    // //     // Artificially delay the loading, so the loading state stays visible for a while.
    // //     // setTimeout(this.loadData, 2000);
    // //     d3.json(this.state.url, function(error, json) {
    // //         if (error) return console.warn(error);
    // //         data = json;
    // //         console.log(json)
    // //     });
    // //
    //
    var mockdata =
    [
    {
    date: "16/11/2015",
    plannedDefectReduction: 44,
    actualDefectReduction: 51,
    planTestRun: -56,
    testNotRun: -55.7
    },
    {
    date: "17/11/2015",
    plannedDefectReduction: 41,
    actualDefectReduction: 52,
    planTestRun: -52,
    testNotRun: -52.43
    },
    {
    date: "18/11/2015",
    plannedDefectReduction: 39,
    actualDefectReduction: 59,
    planTestRun: -49,
    testNotRun: -49.63
    },
    {
    date: "19/11/2015",
    plannedDefectReduction: 36,
    actualDefectReduction: 59,
    planTestRun: -46,
    testNotRun: -37.91
    },
    {
    date: "20/11/2015",
    plannedDefectReduction: 34,
    actualDefectReduction: 36,
    planTestRun: -43,
    testNotRun: -33.53
    },
    {
    date: "23/11/2015",
    plannedDefectReduction: 31,
    actualDefectReduction: 31,
    planTestRun: -39,
    testNotRun: -28.69
    },
    {
    date: "24/11/2015",
    plannedDefectReduction: 29,
    actualDefectReduction: 32,
    planTestRun: -36,
    testNotRun: -26.12
    },
    {
    date: "25/11/2015",
    plannedDefectReduction: 26,
    actualDefectReduction: 35,
    planTestRun: -33,
    testNotRun: -24.54
    },
    {
    date: "26/11/2015",
    plannedDefectReduction: 23,
    actualDefectReduction: 32,
    planTestRun: -29,
    testNotRun: -23.1
    },
    {
    date: "27/11/2015",
    plannedDefectReduction: 21,
    actualDefectReduction: 23,
    planTestRun: -26,
    testNotRun: -22.51
    },
    {
    date: "30/11/2015",
    plannedDefectReduction: 18,
    actualDefectReduction: 22,
    planTestRun: -23,
    testNotRun: -22.51
    },
    {
    date: "1/12/2015",
    plannedDefectReduction: 16,
    actualDefectReduction: 26,
    planTestRun: -20,
    testNotRun: -12.16
    },
    {
    date: "2/12/2015",
    plannedDefectReduction: 13,
    actualDefectReduction: 26,
    planTestRun: -16,
    testNotRun: -8.32
    },
    {
    date: "3/12/2015",
    plannedDefectReduction: 10,
    actualDefectReduction: 27,
    planTestRun: -13,
    testNotRun: -5.93
    },
    {
    date: "4/12/2015",
    plannedDefectReduction: 8,
    actualDefectReduction: 19,
    planTestRun: -10,
    testNotRun: -3.74
    },
    {
    date: "7/12/2015",
    plannedDefectReduction: 5,
    actualDefectReduction: 10,
    planTestRun: -7,
    testNotRun: -2.84
    },
    {
    date: "8/12/2015",
    plannedDefectReduction: 3,
    actualDefectReduction: 9,
    planTestRun: -3,
    testNotRun: -2.27
    },
    {
    date: "9/12/2015",
    plannedDefectReduction: 0,
    actualDefectReduction: 9,
    planTestRun: 0,
    testNotRun: 0
    }
    ];
    this.mountChart(mockdata);

    }
    mountChart(dataInput){
        var margin = {top: 20, right: 80, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.time.scale()
            .range([0, width]);

        var parseDate = d3.time.format("%d/%m/%Y").parse;

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("middle");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left").innerTickSize(-width)
            .outerTickSize(0)
            .tickPadding(10);

        var yScale = d3.scale.linear();

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.itemCount); });

        var svg = d3.select("div#svg").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            dataInput.forEach(function(d) {
                d.date = parseDate(d.date);
            });
            // d3.json('reporting/api/alfresco/5.1/summary', function(error, data) {
            //     if (error) throw error;
            dataInput.map(function(data){

                color.domain(d3.keys(data[0]).filter(function(key) {
                    return key !== "date";
                }));



                var lines = color.domain().map(function(name) {
                return {
                  name: name,
                  values: data.map(function(d) {
                    return {
                        date: d.date,
                        itemCount: +d[name]
                    };
                  })
                };
            });

            x.domain(d3.extent(data, function(d) {
                return d.date;
            }));

            y.domain([
                d3.min(lines, function(c) { return d3.min(c.values, function(v) {
                    return v.itemCount; });
                }),
                d3.max(lines, function(c) { return d3.max(c.values, function(v) {
                    return v.itemCount;
                });
                })
            ]);

            function Y0() {
                return (height/2)+6;
            }

            svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);
            // zero line
            svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + Y0() + ")")
              .call(xAxis.tickFormat("").tickSize(0));

            svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)

            var lines = svg.selectAll(".lines")
              .data(lines)
              .enter().append("g")
              .attr("class", "lines");

            lines.append("path")
              .attr("class", "line")
              .attr("d", function(d) {
                  return line(d.values);
              }).each(function(d){
                  if(d.name === "plannedDefectReduction" || d.name === "actualDefectReduction"){
                      d3.select(this).style('stroke', 'orange');
                  }
              }).each(function(d){
                  if("plannedDefectReduction" === d.name || "planTestRun" === d.name){
                      d3.select(this).style('stroke-dasharray',('3, 3'));
                  }
              });

            var legend = svg.selectAll(".legend")
                .data(color.domain().slice())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                  return "translate(0," + i * 20 + ")";
                });


            legend.append("line")
                .attr("x1", width - 28)
                .attr("x2", width)
                .attr("y1", 10)
                .attr("y2", 10)
                .each(function(name){
                    if("testNotRun" === name || "planTestRun" === name){
                        d3.select(this).style('stroke', 'steelblue');
                    } else {
                        d3.select(this).style('stroke', 'orange');
                    }
                })
                .each(function(d){
                    if("plannedDefectReduction" === d || "planTestRun" === d){
                        d3.select(this).style("stroke-dasharray","5,5");
                    }

                });

            legend.append("text")
                .attr("x", width - 34)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function(d) {
                    var label = ""
                    switch (d) {
                        case "plannedDefectReduction":
                            label =  "Plan for Defect Reduction";
                            break;
                        case "actualDefectReduction":
                            label = "Actual Defect Reduction";
                            break;
                        case "planTestRun":
                            label = "Plan for tests to be run (x100)";
                            break;
                        case "testNotRun":
                            label = "Actual Tests not yet Run (x100)";
                            break;
                        default:
                            label = ""
                    }
                    return label;
                });
        });
    }

    render(){
        console.log("rendering")
        return(
            <div id="svg"></div>
        )
    }
}

export default MainChart
