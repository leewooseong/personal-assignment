import { ChangeEvent, FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

import { IVideoItem } from 'types/video'
import { videoListState, pageNumberState, selectedVideo } from '../../../states/video'
import styles from './searchBar.module.scss'

const PLACEHOLDER_VALUE = '검색'

const SearchBar = () => {
  const setSelectedVideo = useSetRecoilState(selectedVideo)
  const [searchWord, setSearchWord] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()

  const resetMovieList = useResetRecoilState(videoListState)
  const resetPageNumber = useResetRecoilState(pageNumberState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const currentSearch = searchParams.get('s')
    setSelectedVideo({} as IVideoItem)

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
      <input type='text' placeholder={PLACEHOLDER_VALUE} onChange={handleChange} />
    </form>
  )
}

export default SearchBar
