import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    const {
      isOpen,
      message,
      userName,
      closeNotification
    } = this.props;
    const styles = {
      display: isOpen ? 'block' : 'none'
    };
    return (
      <div className="row" style={styles}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{userName}</span>
              <p>{message}</p>
            </div>
            <div className="card-action">
              <a onClick={closeNotification}>Close Notification</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
  isOpen : PropTypes.bool,
  message : PropTypes.string,
  userName: PropTypes.string,
  closeNotification : PropTypes.func.isRequired
}

export default Notification;
