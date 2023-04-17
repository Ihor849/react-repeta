import PropTypes from 'prop-types'
import css from './EventBord.module.css'

export const EventBord = ({ events }) => {
   
    return (
        <div className={css.eventBoard}>{events.map((
            { name, location, speaker, type, time }) => (
            <Event
                key={name}
                name={name}
                location={location}
                speaker={speaker}
                type={type}
                start={time.start}
                end={time.end}
            />))}
        </div>
    )
}

EventBord.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            })
        })
    )
}