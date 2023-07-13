import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { data } from './db';


const Meetups = () => {
    let {meetups} = data ?? [];  
    console.log(meetups)

    const [eventType, setEventType] = useState(meetups);

    const filterByMeetupType = (e) => {
        const event = e?.target?.value;
        if(event === 'onlineAndOffine'){
            setEventType(meetups)
        }else if(event === 'online'){
            const data = meetups?.filter(({eventType}) =>  eventType === 'Online');
            setEventType(data);
        }else if(event === 'offline'){
            const data = meetups?.filter(({eventType}) =>  eventType === 'Offline');
            setEventType(data);
        }
    }

    return (
    <div>
        
        <section>
            <h1>Meetup Events</h1>
            <select name="" id="" onChange={filterByMeetupType}>
                <option value="onlineAndOffine">online and offline events</option>
                <option value="online">online events</option>
                <option value="offline">offline events</option>
            </select>
        </section>

        <ul className='meetups'>
            {eventType?.map(({id, eventThumbnail, title, eventType, eventStartTime}) => (
                <Link key={id} to={`/${id}`} className='meetups__lists'> 
                    <li >
                        <img className='meetups__image' src={eventThumbnail} alt={title} />
                        <p>{eventStartTime}</p>
                        <h2>{title}</h2>
                        <p>{eventType}</p>
                    </li>
                </Link>
            ))}
        </ul>

    </div>
  )
}

export default Meetups