import React from 'react'
/**
 * Usage: <PageTitle title="Dashboard"/>
 * Takes in string title of the page.
 */
export default class PageTitle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h1 className="page-header">{this.props.title}</h1>
        )
    }
}
