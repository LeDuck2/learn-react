




import React from 'react';

class MyComponent extends React.Component {

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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        //alert("me")
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.age}
                
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <input 
                        type="text"
                        onChange={(event)=>this.handleOnChangeInput(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
        
    }
}

export default MyComponent;