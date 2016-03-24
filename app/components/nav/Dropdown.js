import React from 'react'
import {Link} from 'react-router'

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            listVisible: false,
            selected : {
                name : this.props.selected.name,
                value : this.props.selected.value
            }
        }
    }

    select(item){
        this.setState({ listVisible: false, selected : item });
    }

    show(){
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }

    hide(){
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }

    render(){
        return(
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a onClick={this.show.bind()} className="dropdown-toggle" data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={this.state.listVisible}>
                        Test Projects <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        {this.renderListItems()}
                    </ul>
                </li>
            </ul>
        );
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(

                <li><a onClick={this.select.bind(null, item)}>{item.name}</a></li>);
        }
        return items;
    }
}
