import css from "./Statistics.modules.css"

const Statistics = (props) => {
    return <section className="css-statistics">
        {props.title && <h2 className="css-title">Upload stats</h2> }
  {/* <h2 class="title">Upload stats</h2> */}

        <ul className="css-statList">
            {props.stats.map(stat => {
                return <li key={stat.id} className="css-item">
      <span className="css-label">{stat.label}</span>
                <span className="css-percentage"> { stat.percentage}</span>
    </li>
  
            })}
    
  </ul>
</section>
}

export default Statistics