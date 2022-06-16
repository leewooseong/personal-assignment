import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'

import { videoListState, pageNumberState } from '../../../states/video'
import styles from './searchBar.module.scss'

const PLACEHOLDER_VALUE = '검색'

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()

  const resetMovieList = useResetRecoilState(videoListState)
  const resetPageNumber = useResetRecoilState(pageNumberState)

  useEffect(() => {
    const currentSearch = searchParams.get('s')
    if (currentSearch) {
      setSearchWord(currentSearch)
    }
  }, [searchParams])

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const currentSearch = searchParams.get('s')

    if (currentSearch === searchWord) return

    resetMovieList()
    resetPageNumber()
    setSearchParams({ s: searchWord })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input type='text' placeholder={PLACEHOLDER_VALUE} onChange={handleChange} value={searchWord} />
    </form>
  )
}

export default SearchBar
