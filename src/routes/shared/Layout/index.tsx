import { Outlet, useLocation } from 'react-router-dom'

import LNB from 'routes/shared/LNB'
import styles from './layout.module.scss'
import SearchBar from '../../Trainings/SearchBar'

const Layout = () => {
  const location = useLocation()

  return (
    <>
      <header className={styles.layoutHeader}>
        <LNB />
        {location.pathname === '/detail/trainings' && <SearchBar />}
      </header>
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
