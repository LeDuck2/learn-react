import React from 'react';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: false
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    };

    render() {
        //destructuring array/object
        const {listUser} = this.props;
        //console.log(listUser);
        //console.table(listUser);
        return (
            <div>
                <div>
                    <span onClick={() => {this.handleShowHide();}}> 
                        {this.state.isShowListUser === true ? "show this user" : "hide this user" }
                    </span>
                </div>
                {this.state.isShowListUser && (
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div
                                    key={user.id}
                                    className={+user.age > 18 ? 'green' : 'red'}
                                >
                                    <div>this is {user.name}</div>
                                    <div>this is {user.age}</div>
                                    <hr></hr>
                                </div>
                            );
                        })}
                        {/* <div>this is name {name}</div>
                <div>this is age {age}</div> */}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
