import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

// import Message from './Message.js'

// const DUMMY_DATA = [
//   {
//     senderId: 'Soto',
//     text: "Yo is anyone here?"
//   },
//   {
//     senderId: 'Soto',
//     text: "Yo is anyone here?"
//   },
//   {
//     senderId: 'Soto',
//     text: "Yo is anyone here?"
//   }
// ]

class MessageList extends React.Component {

  componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    node.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate(){
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

  render () {
    if (!this.props.roomId){
      return (
        <div className="message-list">
          <div className="join-room">
            &larr;
            <p className="join-room-text">Join A Room!</p>
          </div>
        </div>
      )
    }
    return (
      <div className="message-list">
        {this.props.messages.map((message,index) => {
          return (

            <Message key={index} username={message.senderId} text={message.text}/>

          )
        })}
      </div>
    )
  }

}

export default MessageList
