import React from 'react';

function withAuth(Component) {
  return class extends React.Component {
    render() {
      const authenticated = localStorage.getItem('authenticated') === 'true';
      if (!authenticated) {
        window.location.href = '/login';
        return null;
      }
      return <Component {...this.props} />;
    }
  };
}

export default withAuth;
