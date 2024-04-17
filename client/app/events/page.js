import styles from '../../styles/Event.module.css';
import Event from '../../component/Event';

import { eventsData } from '../../data';
import EventDrawer from '../../component/EventDrawer';

export default function Events() {

    const upcoming = eventsData.filter(e => e.category === 'upcoming')
    const recent = eventsData.filter(e => e.category === 'recent')
    const past = eventsData.filter(e => e.category === 'past')

    return (
        <>
            <div className={styles.events_container}>
                <div className={styles.events_holder}>
                    <EventDrawer>
                        <EventList events={upcoming} />
                        <EventList events={recent} />
                        <EventList events={past} />
                    </EventDrawer>
                </div>
            </div>
        </>
    )
}


const EventList = ({ events }) => {
    return (
        <div>
            {events.map((eventsData, idx) => (
                <Event
                    key={idx}
                    {...eventsData}
                />
            ))}
        </div>
    )
}
