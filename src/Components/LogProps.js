import React, { Component } from 'react'

const defaultProps = {
    name: "vishnu",
    age: 26
}
function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps){
        console.log('old props', prevProps);
        console.log('new props', this.props);
    }

    render() {
        const {forwordedRef, ...rest} = this.props;
        return <WrappedComponent ref={forwordedRef} {...rest}/>
    }
  }
  return React.forwardRef((props, ref) => <LogProps {...props} forwordedRef={ref}/>);
}
logProps.defaultProps = defaultProps
export default logProps