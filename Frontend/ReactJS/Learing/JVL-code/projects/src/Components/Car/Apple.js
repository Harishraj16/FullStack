import React from 'react';

//Class Component ----------------------------------->


class Apple extends React.Component{
    render(){
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        return(
            <h2>I'm a {color} {type} Apple!</h2>
        )
    }
}

export default Apple;