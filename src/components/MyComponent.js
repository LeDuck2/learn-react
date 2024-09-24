import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: 'adj', age: '30'},
            {id: 2, name: 'adv', age: '16'},
            {id: 3, name: 'avd', age: '18'},
        ],
    };

    handleNewUser = (userObj) => {
        // let listNewUser = this.state.listUser;
        // listNewUser.unshift(userObj);
        // console.log('check log', listNewUser);
        // this.setState({
        //     listUser: listNewUser,
        // });
        // console.log(userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser],
        });
    };
    //JSX
    render() {
        //DRY dont repeat yourseft
        return (
            <div>
                <AddUserInfor handleNewUser={this.handleNewUser} />
                <br></br>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;
