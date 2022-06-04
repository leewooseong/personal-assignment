import { useEffect, useState } from 'react'
import { VictoryPie } from 'victory'
import userData from '../../data/user_data.json'
import styles from './home.module.scss'

const ProfileChart = () => {
  const [chartData, setChartData] = useState([
    { x: 1, y: 0, label: ' ' },
    { x: 2, y: 100, label: ' ' },
  ])

  const goalWeightScore = Math.abs(userData.goalWeight - userData.startWeight)
  const achievedScore = Math.abs(userData.startWeight - userData.weight)

  const achievedRatio = achievedScore / goalWeightScore
  const achievedAngle = achievedRatio * 360

  useEffect(() => {
    setChartData([
      { x: 1, y: achievedAngle, label: ' ' },
      { x: 2, y: 100 - achievedAngle, label: ' ' },
    ])
  }, [])

  return (
    <div className={styles.chart}>
      <VictoryPie
        data={chartData}
        startAngle={0}
        endAngle={achievedAngle}
        animate={{ duration: 2000 }}
        innerRadius={135}
        cornerRadius={15}
        colorScale={['#ff6c03', '#ffffff']}
      />
    </div>
  )
}

export default ProfileChart
