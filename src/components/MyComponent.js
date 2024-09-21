




import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Duc',
        address: 'HCM',
        age: 26
    };

    render(){
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        )
        
    }
}

export default MyComponent;