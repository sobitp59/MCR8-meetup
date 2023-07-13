import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import RSVP from './RSVP'
import { data } from './db'
''

const MeetupDetail = () => {
    const {meetupID} = useParams();
    const [isRSVP, setIsRSVP] = useState(false);

    const [userData,setUserData] = useState({
        name : '',
        email : '',
    })

    const meetup = data?.meetups?.filter(({id}) => id === meetupID);
    
    const [{title, hostedBy, eventDescription, eventEndTime, eventStartTime, eventTags, eventThumbnail, eventType, speakers, price, address, location, additionalInformation : {ageRestrictions, dressCode} }] = meetup ?? [];


    return (
    <div className='meetupDetails'>
        <section>
            <h1>{title}</h1>
            <p>hosted by : </p>
            <p><strong>{hostedBy}</strong></p>

            <img className='meetupDetails__image' src={eventThumbnail} alt={title} />

            <h2>details:</h2>
            <p>{eventDescription}</p>
            
            <h2>additional information:</h2>
            <p><strong>dress code : </strong>{dressCode}</p>
            <p><strong>age restriction : </strong>{ageRestrictions}</p>
            
            <h2>event tags:</h2>
            {eventTags?.map((event, index) => <p key={index}>{event}</p>)}
        
        </section>
        
        <section>
            <section>
                <section>
                    {eventStartTime}
                    {eventEndTime}
                </section>

                <section>
                    {address}
                </section>

                <section>{price}</section>
            </section>

            <section>
                <h1>speakers {speakers?.length} :</h1>
                <ul className='meetupDetails__lists'>
                    {speakers?.map(({name, image, designation}, index) => (
                        <li className='meetupDetails__list' key={index}>
                            <img className='meetupDetails__avatar' src={image} alt={name} />
                            <p><strong>{name}</strong></p>
                            <p>{designation}</p>
                        </li>
                    ))}
                </ul>

                <p>*You have to make the payment at the venue</p>

                <button onClick={() => setIsRSVP(true)}>RSVP</button>


                {isRSVP && <RSVP setUserData={setUserData}/> }
            </section>
            
        </section>
    </div>
  )
}

export default MeetupDetail