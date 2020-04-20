import React, { Component } from 'react';



class AddMessage extends Component {

  state = {
    message: ''
  }

  updateMessageState = (value) => {
    this.setState(() => ({
      message: value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.newMessage(this.state.message);
    this.setState(() => ({
      message: ''
    }))
  }

  disableButton = () => {
    return this.state.message === '';
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" placeholder="Enter your message..." onChange={(event) => this.updateMessageState(event.target.value)}/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.disableButton()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
} 



export default AddMessage;