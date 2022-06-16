import styles from './GNB.module.scss'
import { GoalIcon, TrainingIcon, HistoryIcon, HomeIcon } from 'assets/svgs'
import { Link } from 'react-router-dom'

const MENULIST = [
  { name: 'Goals', icon: <GoalIcon />, pageLink: '/detail/goals' },
  { name: 'Trainings', icon: <TrainingIcon />, pageLink: '/detail/trainings' },
  { name: 'History', icon: <HistoryIcon />, pageLink: '/detail/history' },
]

const GNBLIST = [{ name: 'Home', icon: <HomeIcon />, pageLink: '/' }, ...MENULIST]

const GNB = () => (
  <nav className={styles.gnbWrapper}>
    <ul className={styles.gnbList}>
      {GNBLIST.map((menu, index) => (
        <Link to={menu.pageLink} key={`GNB-${index + 1}`}>
          <li className={styles.gnbItem}>
            {menu.icon}
            {menu.name}
          </li>
        </Link>
      ))}
    </ul>
  </nav>
)

export default GNB
