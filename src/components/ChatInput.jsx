import React from 'react';
import PropTypes from 'prop-types';
import { addChat } from '../actions/ChatActions';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const val = this.textInput.value;
    if (val && val.length > 0) {
      const chatMessage = {
        userName: 'You',
        message: val
      }
      console.log(chatMessage);
      addChat(chatMessage);
      this.textInput.value = null;
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="input-field col s10">
            <input type="text" ref={(val) => this.textInput = val} />
          </div>
          <div className="input-field col s2">
            <button type="submit" className="waves-effect waves-light btn">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}


export default ChatInput;
