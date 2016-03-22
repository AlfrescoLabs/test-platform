import React from 'react'
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
            <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
                <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                    <span style={{ color: this.state.selected.value }}>{this.state.selected.name}</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className="dropdown-list">
                    <div className={(this.state.listVisible ? "" : "hidden")}>
                        {this.renderListItems()}
                    </div>
                </div>
            </div>
        );
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                <span>{item.name}</span>
            </div>);
        }
        return items;
    }
}
