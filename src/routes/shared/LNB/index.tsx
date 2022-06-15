import styles from './LNB.module.scss'
import { GoBackIcon, UserIcon } from 'assets/svgs'
import { useNavigate } from 'react-router-dom'

const LNB = () => {
  const navigate = useNavigate()

  const handleBackBtnClick = () => {
    navigate(-1)
  }
  return (
    <nav>
      <ul className={styles.headerNavigation}>
        <li className={styles.backBtn}>
          <button type='button' onClick={handleBackBtnClick}>
            <GoBackIcon />
          </button>
        </li>
        <li className={styles.userInfo}>
          <UserIcon />
          이우성
        </li>
      </ul>
    </nav>
  )
}

export default LNB
