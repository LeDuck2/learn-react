
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    render(){
        const MyInfor = ['a', 'b']
        return (
            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor name = "duy" age = "30"/>
                <DisplayInfor name = {"Duuu"} age = {"40"} MyInfor={MyInfor}/>
            </div>
        )
        
    }
}

export default MyComponent;