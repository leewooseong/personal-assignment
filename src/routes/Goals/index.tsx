import styles from './goals.module.scss'
import LNB from 'routes/shared/LNB'

const Goals = () => (
  <div>
    <header className={styles.searchHeader}>
      <LNB />
    </header>
    <main className={styles.searchMain} />
  </div>
)

export default Goals
