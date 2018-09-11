import React from 'react';
import ChatInput from './ChatInput';
import PropTypes from 'prop-types';

class ChatTable extends React.Component {
	constructor(props) {
    super(props);
		this.addMessage = this.addMessage.bind(this);
    this.state = {
			messageList: [],
			userName:  'Test1'
		}
  }

	componentDidMount() {

	}

	componentDidUpdate() {

	}

	addMessage(message) {
		this.setState((state, props) => {
			state.messageList.push(message);
			return state;
		});
	}

	render() {
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${this.state.userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              this.state.messageList.map((msg, index) => {
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
								onSubmit={this.addMessage}
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default ChatTable;
