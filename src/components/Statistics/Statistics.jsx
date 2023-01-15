import "./statistics.css"

const Statistics = () => {
  return(
  <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item-stat">
      <span className="label-stat">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item-stat">
      <span className="label-stat">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item-stat">
      <span className="label-stat">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item-stat">
      <span className="label-stat">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
      </section>
  )
}

export default Statistics;