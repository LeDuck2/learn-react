import React from "react";


class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const {listUser} = this.props;
        return(
            <div>
                {listUser.map((user, index)=>{
                    console.log(user);
                    return(
                        <div key={user.id}>
                            <div>this is {user.name}</div>
                            <div>this is {user.age}</div>
                            <hr></hr>
                        </div>       
                    )
                })}
                {/* <div>this is name {name}</div>
                <div>this is age {age}</div> */}
            </div>
        )
    }
    
}

export default DisplayInfor;