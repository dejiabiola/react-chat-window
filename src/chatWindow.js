import React, { Component } from 'react';
import MessageHistory from './messageHistory';
import AddMessage from './addMessage';




class ChatWindow extends Component {
  
  getMessage = (message) => {
    
    this.props.addNewMessage({username: this.props.user.username, text: message})
  }

  render() {
    
    return (
      
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <MessageHistory messages={this.props.messages} user={this.props.user}/>
        <AddMessage newMessage={this.getMessage}/>  
      </div>
    )
  }
}



export default ChatWindow;