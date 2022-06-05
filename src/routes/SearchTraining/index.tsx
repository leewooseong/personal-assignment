import styles from './searchTraining.module.scss'
import LNB from 'routes/shared/LNB'
import SearchBar from './SearchBar/index'
import VideoList from './VideoList'

const SearchTraining = () => {
  return (
    <div>
      <header className={styles.searchHeader}>
        <LNB />
        <SearchBar />
      </header>
      <main className={styles.searchMain}>
        <VideoList />
      </main>
    </div>
  )
}

export default SearchTraining
