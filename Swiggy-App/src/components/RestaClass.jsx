// in this file i  am making a class based component which is use in traditional core reacts
import React from "react";

class RestaData extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
           userInfo:{
            
           }
        };
    }

    async componentDidMount() {
        const response = await fetch(
            "https://api.github.com/users/Manish-dev3490"
        );
        const json = await response.json();
        this.setState({
            userInfo:json,
        })
      

    }

    render() {
        const { id,node_id } = this.state.userInfo;

        return (
            <>
                <p>{id}</p>
                <p>{node_id}</p>
            </>
        );
    }

    
}

export default RestaData;
