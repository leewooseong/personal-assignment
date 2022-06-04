interface IThumbnail {
  url: string
  width: number
  height: number
}

interface ISnippet {
  ublishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: {
    default: IThumbnail
    medium: IThumbnail
    high: IThumbnail
  }
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: {
    itle: string
    escription: string
  }
  defaultAudioLanguage: string
}

interface IVideoItem {
  kind: string
  etag: string
  id: string
  snippet: ISnippet
}

export interface IYoutubeAPIRes {
  kind: string
  etag: string
  items: IVideoItem[]
  nextPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}
