import { Link } from 'react-router-dom'
import cx from 'classnames'

import ProfileChart from './ProfileChart'
import userData from '../../data/user_data.json'
import styles from './home.module.scss'
import { FrontArrowIcon, GoalIcon, TrainingIcon, HistoryIcon, UserIcon, SettingsIcon } from 'assets/svgs'

const MENULIST = [
  { name: 'Goals', icon: <GoalIcon fill='red' />, pageLink: '/detail/goals' },
  { name: 'Trainings', icon: <TrainingIcon />, pageLink: '/detail/trainings' },
  { name: 'History', icon: <HistoryIcon />, pageLink: '/detail/history' },
]

const Home = () => {
  return (
    <main className={styles.homeWrapper}>
      <h1 className={styles.homeTitle}>Home</h1>
      <section className={styles.profileWrapper}>
        <div className={styles.profileImageWrapper}>
          <ProfileChart />
          <UserIcon className={styles.profileImage} />
        </div>
        <p className={styles.profileMessage}>
          &quot; {userData.message} &quot;
          {/* &quot; 글자수 제한 기능, 작성 날짜를 넣어주자.&quot; */}
          {/* <span>2022-06-05</span> */}
        </p>
        <p className={styles.profileName}>{userData.name}</p>
        <dl className={styles.profileBodyInfo}>
          <dt>Height</dt>
          <dd>{userData.height}</dd>
          <dt>Weight</dt>
          <dd>{userData.weight}</dd>
        </dl>
      </section>
      <section className={styles.menuWrapper}>
        <ul>
          {MENULIST.map((menu, index) => {
            return (
              <li key={`menu-${index}`}>
                <Link
                  to={menu.pageLink}
                  className={cx(
                    { [styles.goal]: menu.name === 'Goals' },
                    { [styles.training]: menu.name === 'Trainings' },
                    { [styles.history]: menu.name === 'History' }
                  )}
                >
                  {menu.icon}
                  <p className={styles.menuName}>{menu.name}</p>
                  <FrontArrowIcon className={styles.pageLinkBtn} />
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
      <button type='button' className={styles.settingsBtn}>
        <SettingsIcon />
        <span>Settings</span>
      </button>
    </main>
  )
}

export default Home
