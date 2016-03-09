import React from 'react'
import d3 from 'd3'
import Xaxis from './defect/Xaxis'
import Yaxis from './defect/Yaxis'
class MainChart extends React.Component{
    constructor() {
        super();
        this.state = {
            width : 800,
            height : 450
        }
    }
    render(){
        return(
            <svg width={this.state.width} height={this.state.height}>
            <Xaxis />
            <Yaxis />
            </svg>
        )
    }
}
export default MainChart
