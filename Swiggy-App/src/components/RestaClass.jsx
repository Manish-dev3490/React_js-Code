// in this file i  am making a class based component which is use in traditional core reacts 
import React from "react";

  class RestaData extends React.Component{
    constructor(props){
        super(props)
    }


    
    render (){

        const {Name,Location,classes}=this.props;

        return (
            <>
            <h2>{Name}</h2>
            <h2>{Location}</h2>
            <h2>{classes}</h2>


            </>
        )
    }
}

export default RestaData;