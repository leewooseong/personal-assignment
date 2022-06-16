import { Link, Location, useLocation } from 'react-router-dom'
import cx from 'classnames'

import { GoalIcon, TrainingIcon, HistoryIcon, HomeIcon } from 'assets/svgs'
import styles from './GNB.module.scss'

const GNB_LIST = [
  { name: 'Home', icon: <HomeIcon />, pageLink: '/' },
  { name: 'Goals', icon: <GoalIcon />, pageLink: '/detail/goals' },
  { name: 'Trainings', icon: <TrainingIcon />, pageLink: '/detail/trainings' },
  { name: 'History', icon: <HistoryIcon />, pageLink: '/detail/history' },
]

const findPageName = (location: Location, ButtonName: string) => {
  const locationPageName = location.pathname.split('/').pop()

  return locationPageName === ButtonName.toLowerCase()
}

const GNB = () => {
  const location = useLocation()
  const menuNameExample = 'hihi'

  return (
    <nav className={styles.gnbWrapper}>
      <ul className={styles.gnbList}>
        {GNB_LIST.map((menu, index) => (
          <Link to={menu.pageLink} key={`GNB-${index + 1}`}>
            <li
              className={cx(styles.gnbItem, {
                [styles[menu.name.toLowerCase()]]: findPageName(location, menu.name),
                [styles.active]: findPageName(location, menu.name),
              })}
            >
              {menu.icon}
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default GNB
