import React from 'react'

class Yaxis extends React.Component{
    render(){
        return(
            <g className="axis">
                <g className="tick" transform="translate(0,450)" style={{"opacity": 1}}>
                    <line x2="-6" y2="0"></line>
                    <text dy=".32em" x="-12" y="0" style={{"textAnchor": "middle"}}>0</text>
                </g>
                <g className="tick" transform="translate(0,405.88235294117646)" style={{"opacity": 1}}>
                    <line x2="-6" y2="0"></line>
                    <text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>10</text>
                </g>
                <g className="tick" transform="translate(0,361.7647058823529)" style={{"opacity": 1}}>
                    <line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>20</text>
                </g>
                <g className="tick" transform="translate(0,317.6470588235294)" style={{"opacity": 1}}>
                    <line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>30</text>
                </g>
                <g className="tick" transform="translate(0,273.5294117647059)" style={{"opacity": 1}}>
                    <line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>40</text>
                </g>
                <g className="tick" transform="translate(0,229.41176470588235)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>50</text></g>
                <g className="tick" transform="translate(0,185.2941176470588)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>60</text></g>
                <g className="tick" transform="translate(0,141.1764705882353)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>70</text></g>
                <g className="tick" transform="translate(0,97.05882352941177)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>80</text></g>
                <g className="tick" transform="translate(0,52.941176470588246)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>90</text></g>
                <g className="tick" transform="translate(0,8.823529411764724)" style={{"opacity": 1}}><line x2="-6" y2="0"></line><text dy=".32em" x="-18" y="0" style={{"textAnchor": "middle"}}>100</text></g>
                <path className="domain" d="M-6,0H0V450H-6"></path>
            </g>
        )
    }
}
export default Yaxis
