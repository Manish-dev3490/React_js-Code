// in this file i  am making a class based component which is use in traditional core reacts 
import React from "react";
import { CardClass } from "./CardClass";
  class RestaData extends React.Component{
   
    constructor(props){
        super(props);
       
        console.log("parent constructor call");
       
    }

    componentDidMount(){
        console.log("parent componentDidMount call");

    }

    
    render (){

      
       
        console.log("parent render call call");

        return (
            <>
                <p>Hello  to  the rect js world</p>
                <CardClass name="manish" education="bca" location="delhi"/>
                

            </>
        )
    }
}

export default RestaData;