import React from 'react';
import ChatInput from './ChatInput';
import PropTypes from 'prop-types';

class ChatTable extends React.Component {
	constructor(props) {
    super(props);
		this.userName = 'Test1';
    this.messageList = [ { userName: 'Test1', message: 'Hello World' }  ];
  }
	render() {
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${this.userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              this.messageList.map((msg, index) => {
								const classes = `card-content ${msg.userName === 'You' ? 'right-align' : 'left-align'}`;
								return (
									<div key={index} className={classes}>
										<div className="chip">
											<strong>{msg.userName}: </strong>
											<span>{msg.message}</span>
										</div>
									</div>
								)
              })
            }
            <div className="card-action">
              <ChatInput
								onSubmit={this.props.sendChat}
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default ChatTable;
