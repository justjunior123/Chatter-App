import React from 'react'

// This syntax is stateless component syntax. Considered best practice
// When condensing a stateless functional component.
const Message = (props) => {

    return (

      <div className='message'>
        <div className='message-username'> { props.username} </div>
        <div className='message-text'> { props.text } </div>
      </div>
    )

  }

export default Message
