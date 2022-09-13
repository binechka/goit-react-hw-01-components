

const Statistics = (props) => {
    return <section class="statistics">
        {props.title && <h2 class="title">Upload stats</h2> }
  {/* <h2 class="title">Upload stats</h2> */}

        <ul class="stat-list">
            {props.stats.map(stat => {
                return <li key={stat.id} class="item">
      <span class="label">{stat.label}</span>
                <span class="percentage"> { stat.percentage}</span>
    </li>
  
            })}
    
  </ul>
</section>
}

export default Statistics