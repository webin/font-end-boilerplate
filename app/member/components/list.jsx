'use strict';  
import React, {Component} from 'react';
import { connect } from 'react-redux'
 
 

const data = [
    {id:0,name:"我的收藏",icon:"images/icon_star_03.png"},
    {id:1,name:"我的优惠券",icon:"images/icon_coupon_06.png"},
    {id:2,name:"收货地址",icon:"images/icon_point_08.png"}
];

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:0
        }
    }
    componentDidMount(){
        console.log(33);
        console.log(this.props,this.state)
    }
    handleClick(id){
        //console.log(data[id]);
        //alert(data[id].name);
        let sid = this.state.id + id;
        this.props.dispatch({ 
            type: 'ADD_TODO',
            id:sid,
            text:'some test '+sid ,
            completed:true
        });
        this.setState({
            id:sid
        })
    }
    renderList(){
        return data.map((item,i)=>{
            return (
                <li key={'item-'+i} onClick={this.handleClick.bind(this,item.id)}>
                    <img src={item.icon} />
                    <span>{item.name}</span>
                    <img className="side" src="images/icon_arrow_08.png" />
                </li>
            )
        })
    }
    render() {
      console.log(this.props)
        return (
            <ul className="menu-list">
                <li>{this.props.text}</li>
                {this.renderList()}
            </ul>
        );
  }
}
function selector(state){
    //console.log(state)
    const {id,text,completed} = state;
    return {
        id:id,
        text:text,
        completed:completed
    }
}
List = connect(selector)(List);
export default List

