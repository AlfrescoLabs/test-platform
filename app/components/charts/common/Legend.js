import React from 'react'

export default class Legend extends React.Component{
    //Pass the width, the label text and color.
    constructor(props) {
        super(props);
    }
    render(){
        var legend = {"fill" : this.props.color};
        return(
            <g class="legend" transform="translate(0,0)">
                <rect x={this.props.width-14} width="18" height="18" style = {legend}></rect>
                <text x={this.props.width-20} y="9" dy=".35em" style={{"text-anchor" : "end"}}> CAT 2 Pending</text>
            </g>
        )
    }
}
