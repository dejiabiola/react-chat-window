import React, { Component } from 'react';



class MessageHistory extends Component {



  render() {
    return(
      <ul className="message-list">
        {this.props.messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === this.props.user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default MessageHistory;