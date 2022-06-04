interface IVideoList {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IYoutubeAPIRes {
  Search: IVideoList[]
  totalResults: string
  Response: string
  Error?: string
}
