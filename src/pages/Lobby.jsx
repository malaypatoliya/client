import React, { useState } from 'react'

const Lobby = () => {
  const [room, setRoom] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('room', room)
    console.log('email', email)
  }

  return (
    <>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="room">Room</label>
        <input type="text" name="room" id="room" value={room} onChange={e => setRoom(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

        <button type="submit">Join</button>
      </form>
    </>
  )
}

export default Lobby