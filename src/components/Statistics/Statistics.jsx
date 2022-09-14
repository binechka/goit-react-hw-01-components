import PropTypes from "prop-types"

import css from "./Statistics.module.css"

const Statistics = ({statistics, title}) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2> }


        <ul className={css.statList}>
            {statistics.map(stat => {
                return <li key={stat.id} className={css.item}>
      <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}> { stat.percentage}</span>
    </li>
  
            })}
    
  </ul>
</section>
}

Statistics.propTypes = {

    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
    },)) ,
    title:PropTypes.string,
}

export default Statistics