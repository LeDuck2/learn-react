




import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Duc',
        address: 'HCM',
        age: 26
    };

    handleClick(event){
        //console.log("click my button");
        //console.log("random", Math.floor((Math.random() * 100) + 1));

        this.setState({
            name: 'Duy',
            age: Math.floor((Math.random() * 100) + 1)
        });
    };

    handleOnMouseOver(event){
        //console.log(event);
    };

    render(){
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={(event) => {this.handleOnMouseOver(event)}}>Hover me</button>
            </div>
        )
        
    }
}

export default MyComponent;