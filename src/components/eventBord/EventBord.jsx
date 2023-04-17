import PropTypes from 'prop-types'
import css from './EventBord.module.css'

export const EventBord = ({events}) => {
    return (
        <div className={css.eventBoard}>{events.map()}</div>
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