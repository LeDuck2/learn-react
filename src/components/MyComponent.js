import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: 'adj', age: '30'},
            {id: 2, name: 'adv', age: '16'},
            {id: 3, name: 'avd', age: '18'},
        ],
    };
    //JSX
    render() {
        //DRY dont repeat yourseft
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;
