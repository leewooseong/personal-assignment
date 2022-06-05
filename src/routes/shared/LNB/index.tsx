import styles from './LNB.module.scss'
import { GoBackIcon, UserIcon } from 'assets/svgs'
import { Link } from 'react-router-dom'

const LNB = () => (
  <nav>
    <ul className={styles.headerNavigation}>
      <li className={styles.backBtn}>
        <Link to='/'>
          <GoBackIcon />
        </Link>
      </li>
      <li className={styles.userInfo}>
        <UserIcon />
        이우성
      </li>
    </ul>
  </nav>
)

export default LNB
