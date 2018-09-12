import React from 'react';
import ChatInput from './ChatInput';
import PropTypes from 'prop-types';
import ChatStore from '../stores/ChatStore';

class ChatTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: ChatStore.getActiveChat(),
			messageList: ChatStore.getCurrentMessageList()
		}
	}

	componentDidMount() {
		ChatStore.on("storeUpdated", () => {
			this.setState(
			{
				userName: ChatStore.getActiveChat(),
				messageList: ChatStore.getCurrentMessageList()
			});
		});
	}

	componentWillUnMount() {
		ChatStore.remove('storeUpdated');
	}

	render() {
		const {
			userName,
			messageList
		} = this.state;
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              messageList.map((msg, index) => {
								const classes = `card-content ${msg.userName === 'You' ? 'right-align' : 'left-align'}`;
								return (
									<div key={index} className={classes}>
										<div className="chip">
											<b>{msg.userName}: </b>
											<span>{msg.message}</span>
										</div>
									</div>
								)
              })
            }
            <div className="card-action">
              <ChatInput
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default ChatTable;
