import React from 'react'
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

  render () {
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
