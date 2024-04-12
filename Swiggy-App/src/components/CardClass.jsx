// In this file i am making a class based components 
import React from "react";
  export class CardClass extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name +"child constructor called");

    }

    componentDidMount(){
        console.log(this.props.name+"child component did mount called ");
    }

    render(){
        const {name , location , education}=this.props;
        console.log(this.props.name+"child render called ");
        return (
            <>
            <h2>{name}</h2>
            <h2>{education}</h2>
            <h2>{location}</h2>
            </>
            
        )
    }
 }