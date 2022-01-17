import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_PATH } from '../../constants/routes';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  renderErrorPage = () => {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center text-danger">Something went wrong. 😔</h1>
          <Link to={HOME_PATH}>return to Home</Link>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.hasError) {
      return this.renderErrorPage();
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
