import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import SearchTraining from './SearchTraining'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<SearchTraining />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
        <main className={styles.scrollArea} />
      </div>
    </div>
  )
}

export default App
