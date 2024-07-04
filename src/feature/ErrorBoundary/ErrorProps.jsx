import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <div className='error-page'><a href='/' className='error-link'>Go to main</a></div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
