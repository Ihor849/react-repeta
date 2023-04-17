import PropTypes from 'prop-types'

import {Title} from './PageTitle.module.css'

export const PageTitle = ({text}) => {
    return
    <div>
        <PageTitle className={css.title}>{text}</PageTitle>
    </div>
}
PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}