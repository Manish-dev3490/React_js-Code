// in this file i  am making a class based component which is use in traditional core reacts
import React from "react";

class RestaData extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
           userInfo:{
            name:"manku",
            class:"12tha",
            id:123,
           },
           count:5
        };
    }

    async componentDidMount() {
        // const response = await fetch(
        //     "https://api.github.com/users/Manish-dev3490"
        // );
        // const json = await response.json();
        // this.setState({
        //     userInfo:json,
        // })

        console.log("Componentdidmount is called");
      

    }

    componentDidUpdate(){
        console.log("yes updating is finished ");
    }

    render() {
        const { id,node_id ,login} = this.state.userInfo;
        const {count}=this.state;

        return (
            <>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>{count}</button>
                <h2>{login}</h2>
                <p>{id}</p>
                <p>{node_id}</p>
            </>
        );
    }

    
}

export default RestaData;
