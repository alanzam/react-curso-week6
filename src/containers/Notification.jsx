import React from 'react';
import NotificationStore from '../stores/NotificationStore';
import NotificationComponent from '../components/Notification';

class Notification extends React.Component {
  constructor(props) {
		super(props);
    this.closeNotification = this.closeNotification.bind(this);
		this.state = {
      isOpen: false
		}
	}

	componentDidMount() {
		NotificationStore.on("storeUpdated", () => {
			this.setState(
			{
				message: NotificationStore.getNewMessage(),
        isOpen: NotificationStore.getNewMessage() != this.state.message
			});
		});
	}

	componentWillUnMount() {
		NotificationStore.remove('storeUpdated');
	}

  closeNotification() {
    this.setState(
    {
      message: this.state.message,
      isOpen: false
    });
  }

	render() {
    if (!this.state.message)
      return null;
		return (
      <NotificationComponent
        isOpen={this.state.isOpen}
				userName={this.state.message.userName}
        message={this.state.message.message}
        closeNotification={this.closeNotification}
			/>
		);
	}
}

export default Notification;
