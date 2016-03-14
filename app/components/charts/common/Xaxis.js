import React from 'react'

class Xaxis extends React.Component{
    constructor(props){
        super(props)
        console.log(props.data)
    }
    render(){
        return(
            <g className="axis" transform="translate(0,450)">
                <g className="tick" transform="translate(15.888128466996104,0)" style={{"opacity": 1}}>
                    <line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>November</text>
                </g>
            </g>
        // <g className="axis" transform="translate(0,450)">
        //     <g className="tick" transform="translate(15.888128466996104,0)" style={{"opacity": 1}}>
        //         <line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>November</text>
        //     </g>
        // <g className="tick" transform="translate(63.439666002633665,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Nov 08</text></g>
        // <g className="tick" transform="translate(110.99120353827122,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Nov 15</text></g>
        // <g className="tick" transform="translate(158.5427410739088,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Nov 22</text></g>
        // <g className="tick" transform="translate(206.09427860954634,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Nov 29</text></g>
        // <g className="tick" transform="translate(253.6458161451839,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Dec 06</text></g>
        // <g className="tick" transform="translate(301.1973536808215,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Dec 13</text></g>
        // <g className="tick" transform="translate(348.748891216459,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Dec 20</text></g>
        // <g className="tick" transform="translate(396.3004287520966,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Dec 27</text></g>
        // <g className="tick" transform="translate(443.8519662877341,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Jan 03</text></g>
        // <g className="tick" transform="translate(491.4035038233717,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Jan 10</text></g>
        // <g className="tick" transform="translate(538.9550413590092,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Jan 17</text></g>
        // <g className="tick" transform="translate(586.5065788946469,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Jan 24</text></g>
        // <g className="tick" transform="translate(634.0581164302843,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Jan 31</text></g>
        // <g className="tick" transform="translate(681.6096539659219,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Feb 07</text></g>
        // <g className="tick" transform="translate(729.1611915015594,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Feb 14</text></g>
        // <g className="tick" transform="translate(776.712729037197,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Feb 21</text></g>
        // <g className="tick" transform="translate(824.2642665728346,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Feb 28</text></g>
        // <g className="tick" transform="translate(871.8158041084722,0)" style={{"opacity": 1}}><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style={{"textAnchor": "middle"}}>Mar 06</text></g>
        // <path className="domain" d="M0,6V0H890V6"></path>
        // </g>
    )
    }
}
export default Xaxis
