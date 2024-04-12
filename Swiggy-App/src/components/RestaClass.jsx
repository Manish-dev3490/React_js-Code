// in this file i  am making a class based component which is use in traditional core reacts 
import React from "react";

  class RestaData extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            count :0,
            count2:1
        }
       
    }

   

    
    render (){

      
        const {Name,Location,Classes}=this.props;
        const {count,count2}=this.state;

        return (
            <>
            <h2>{Name}</h2>
            <h2>{Location}</h2>
            <h2>{Classes}</h2>
            <button onClick={()=>{
                this.setState({
                    count:count + 1,

                })
                
            }}>{count}</button>


            </>
        )
    }
}

export default RestaData;