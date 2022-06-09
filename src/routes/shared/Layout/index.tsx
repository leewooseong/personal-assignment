import { Outlet } from 'react-router-dom'

import LNB from 'routes/shared/LNB'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <>
      <header className={styles.layoutHeader}>
        <LNB />
      </header>
      <Outlet />
    </>
  )
}

export default Layout
