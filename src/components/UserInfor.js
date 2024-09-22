import React from "react";

class UserInfor extends React.Component {
    
    state = {
        name: 'Duc',
        address: 'HCM',
        age: 26
    };

    // handleClick(event){
    //     //console.log("click my button");
    //     //console.log("random", Math.floor((Math.random() * 100) + 1));

    //     this.setState({
    //         name: 'Duy',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     });
    // };

    // handleOnMouseOver(event){
    //     //console.log(event);
    // };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                My name is {this.state.name} and i'm from {this.state.age}
                
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input 
                        value = {this.state.name}
                        type="text"
                        onChange={(event)=>this.handleOnChangeName(event)}
                    />
                    <button>submit</button>

                    <label>Your age:</label>
                    <input 
                        value = {this.state.age}
                        type="text"
                        onChange={(event)=>this.handleOnChangeAge(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor;