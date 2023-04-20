import upcomingEvents from '../../upcoming-events.json'
import { PageTitle } from 'components/PageTitle/PageTitle'
import {EventBord} from 'components/eventBord/EventBord'




export const App = () => {
    // console.log(upcomingEvents)
    return (
    <div>
        <PageTitle text='24th Core orlds Coalition Conference' />
        <EventBord events={upcomingEvents } />
          
    </div>
  )
  
}


// text="24th Core orlds Coalition Conference"