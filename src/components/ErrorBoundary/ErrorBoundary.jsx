import { Component } from 'react';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import BadRequest from 'components/BadRequest';

import { validationRequest } from 'services/notifications';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: 'Loading page failed',
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    validationRequest(this.state.error);
  }

  handleButtonClick = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    return (
      <>
        {hasError ? (
          <Section>
            <BadRequest error={error} />

            <button type="button" onClick={this.handleButtonClick}>
              Try refreshing the page
            </button>
          </Section>
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
