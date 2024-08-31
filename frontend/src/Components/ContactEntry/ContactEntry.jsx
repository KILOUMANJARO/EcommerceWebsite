import React from 'react'
import './ContactEntry.css'

export const ContactEntry = () => {
  return (
    <div className='container'>
      <div className='contactBorder'>
      <div className='contact'>
        <h1>Contact</h1>
        <div className='textboxContainer'>
          <div className='email'>
            <label for='emailTextbox'>email </label>
            <input type='text' id='textbox' class='styled-textbox' placeholder='Enter text here'></input>
          </div>

          <div className='subject'>
            <label for='subjectTextbox'>subject </label>
            <input type='text' id='textbox' class='styled-textbox' placeholder='Enter text here'></input>
          </div>

          <div className='message'>
              <label for='messageTextbox'>message </label>
              <input type='text' id='textbox' class='long-textbox' placeholder='Enter text here'></input>
          </div>
        </div>

        <div className='buttons'>
          <button className='custom-button'>Send to ORIKA</button>
          <button className='custom-button'>Send to Order Support</button>
        </div>

      </div>
      </div>
    </div>
  )
}
