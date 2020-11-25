import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.SubmitMessage = this.SubmitMessage.bind(this);
    this.state = {
      messageText: '',
    };
  }

  handleMessage = (e) => {
    this.setState({
      messageText: e.target.value,
    });
  };

  sendMessage = () => {
    this.props.addMessage({ text: this.state.messageText, role: 'CUSTOMER' });
    this.setState({
      messageText: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleMessage} value={this.state.messageText} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
