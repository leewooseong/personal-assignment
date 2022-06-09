import SearchBar from './SearchBar/index'
import VideoList from './VideoList'
import styles from './searchTraining.module.scss'

const SearchTraining = () => {
  return (
    <>
      <SearchBar />
      <main className={styles.trainingMain}>
        <VideoList />
      </main>
    </>
  )
}

export default SearchTraining
