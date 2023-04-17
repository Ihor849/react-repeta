import upcomingEvents from '../../upcoming-events.json'
import { PageTitle } from 'components/pageTitle/PageTitle'
import {EventBord} from 'components/eventBord/EventBord'



export const App = () => {
    console.log(upcomingEvents)
    return (
    <div>
        <PageTitle text='24th Core orlds Coalition Conference' />
        <EventBord upcomingEvents='events'/>   
    </div>
  )
  
}

// - FaMapMarkerAlt
// - FaUserAlt
// - FaCalendarAlt
// - FaClock

// text="24th Core orlds Coalition Conference"