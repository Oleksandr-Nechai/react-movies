import { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import BadRequest from 'components/BadRequest';

import { validationRequest } from 'services/notifications';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: 'Network Error',
  };

  static getDerivedStateFromError(error) {
    console.dir(error);
    return { hasError: true };
  }

  componentDidCatch() {
    console.log('11');
    validationRequest(this.state.error);
  }

  ddd = () => {
    this.setState({ hasError: false });

    // window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    return (
      <>
        {hasError ? (
          <>
            <BadRequest error={error} />

            <NavLink to="/" onClick={this.ddd}>
              Home
            </NavLink>
          </>
        ) : (
          <>{children}</>
        )}
      </>
    );
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
