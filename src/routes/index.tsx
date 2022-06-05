import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import styles from './routes.module.scss'
import SearchTraining from './SearchTraining'
import VideoDetail from './VideoDetail'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trainings' element={<SearchTraining />} />
          <Route path='/videoDetail' element={<VideoDetail />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
