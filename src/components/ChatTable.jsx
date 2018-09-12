import React from 'react';
import ChatInput from './ChatInput';
import PropTypes from 'prop-types';

class ChatTable extends React.Component {

	render() {
		const {
			userName,
			messageList,
			addChat
		} = this.props;
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
								onSubmit={addChat}
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default ChatTable;
