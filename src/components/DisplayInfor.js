import React from "react";


class DisplayInfor extends React.Component {
    render() {
        const {name, age} = this.props;
        return(
            <div>
                <div>this is name {name}</div>
                <div>this is age {age}</div>
            </div>
        )
    }
    
}

export default DisplayInfor;