 import React from 'react'

class SendMessageForm extends React.Component {

  constructor(){
    super()
    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    // send off the message to parent component
    this.props.sendMessage(this.state.message)
    // Once we send off a message we need to clean up the input field
    this.setState ({
      message: ''
    })
  }

  render (){
    return (

      <form
        onSubmit={ this.handleSubmit}
        className="send-message-form">
        <input
          disabled={ this.props.disabled}
          onChange= { this.handleChange }
          value= {this.state.message}
          type="text"
          placeholder="Type message and hit Enter / Return on mobile"  />

      </form>
    )
  }
}


export default SendMessageForm
