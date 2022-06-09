import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import styles from './routes.module.scss'
import Layout from './shared/Layout'
import SearchTraining from './SearchTraining'
import VideoDetail from './VideoDetail'
import Goals from './Goals'
import NotFound from './NotFound/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Layout />}>
            <Route path='goals' element={<Goals />} />
            <Route path='trainings' element={<SearchTraining />} />
            <Route path='videoDetail' element={<VideoDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
