import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ''
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
        hasError: true,
        error: errorInfo
    })
    console.log(error, errorInfo)
  }

  render() {
    console.log(this.state)
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback : <h1>something went wrong...!!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
