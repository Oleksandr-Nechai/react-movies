import { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import BadRequest from 'components/BadRequest';

import { validationRequest } from 'services/notifications';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
  };

  static getDerivedStateFromError() {
    console.log('22');
    return { hasError: true, error: 'Loading page failed' };
  }

  componentDidCatch() {
    console.log('11');
    validationRequest(this.state.error);
  }

  ddd = () => {
    this.setState({ hasError: false, error: '' });
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
