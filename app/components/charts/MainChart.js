import React from 'react'
import d3 from 'd3'
import Xaxis from './common/Xaxis'
import Yaxis from './common/Yaxis'
import Legend from './common/Legend'
class MainChart extends React.Component{
    constructor() {
        super();
        this.state = {
            width : 960,
            height : 500
        }
    }
    render(){
        return(
            <svg width={this.state.width} height={this.state.height}>
                <g transform="translate(50,20)">
                    <Xaxis />
                    <Yaxis />
                    <Legend width={this.state.width - 50} color="rgb(211, 211, 211)" count="1"></Legend>
                    <Legend width={this.state.width - 50} color="rgb(190, 190, 190)" count="2"></Legend>
                    <Legend width={this.state.width - 50} color="rgb(255, 51, 51)" count="3"></Legend>
                    <Legend width={this.state.width - 50} color="rgb(204, 0, 0)" count="4"></Legend>
                </g>
            </svg>
        )
    }
}
export default MainChart
