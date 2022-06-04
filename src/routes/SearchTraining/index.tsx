import styles from './searchTraining.module.scss'
import LNB from 'routes/shared/LNB'
import SearchBar from './SearchBar/index'

const SearchTraining = () => (
  <div>
    <header>
      <LNB />
      <SearchBar />
    </header>
    <main>search Page</main>
  </div>
)

export default SearchTraining
