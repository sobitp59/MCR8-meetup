import React from 'react'

const RSVP = ({setUserData}) => {
  return (
    <div>
        <h2>complete your RSVP</h2>
        <p>fill in your personal information</p>

        <label>
            Name:
            <input onChange={(e) => setUserData(prev => [{...prev, name : e?.target?.value}])} type="text" placeholder='enetr name...'/>
        </label>

        <label>
            Email:
            <input onChange={(e) => setUserData(prev => [{...prev, email : e?.target?.value}])} type="email" placeholder='enetr email...'/>
        </label>

        <button>RSVP</button>


    </div>
  )
}

export default RSVP