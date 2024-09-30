import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };

    componentDidMount() {}
    render() {
        //destructuring array/object
        const {listUser} = this.props;
        //console.log(listUser);
        //console.table(listUser);
        return (
            <div className="Display-Infor-Container">
                <img src={logo} />
                <div>
                    <span
                        onClick={() => {
                            this.handleShowHide();
                        }}
                    >
                        {this.state.isShowListUser === true
                            ? 'show this user'
                            : 'hide this user'}
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
