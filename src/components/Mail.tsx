import React from 'react'

const Mail = ({ senderEmail, senderName, message }: { senderEmail: String, senderName: String, message: String }) => {
  return (
    <>
      <h2>From: {senderName} {`<${senderEmail}>`}</h2>
      <p>{message}</p>
    </>
  )
}

export default Mail