import PropTypes from "prop-types"

import css from "./Statistics.module.css"

const Statistics = ({stats, title}) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2> }


        <ul className={css.statList}>
            {stats.map(stat => {
                return <li key={stat.id} className={css.item}>
      <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}> { stat.percentage}</span>
    </li>
  
            })}
    
  </ul>
</section>
}

Statistics.propTypes = {
    stats: PropTypes.array,
    title:PropTypes.string,
}

export default Statistics