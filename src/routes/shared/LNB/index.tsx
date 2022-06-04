import styles from './LNB.module.scss'
import { GoBackIcon, UserIcon } from 'assets/svgs'

const LNB = () => (
  <nav>
    <ul className={styles.headerNavigation}>
      <li className={styles.backBtn}>
        <GoBackIcon />
      </li>
      <li className={styles.userInfo}>
        <UserIcon />
        이우성
      </li>
    </ul>
  </nav>
)

export default LNB
