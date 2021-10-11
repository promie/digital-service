interface IImage {
  showImage?: string
}

interface IEpisode {
  channel?: string
  channelLogo?: string
  date?: Date
  html?: string
  url?: string
}

interface ISeason {
  slug?: string
}

export interface IShow {
  country?: string
  description?: string
  drm?: boolean
  episodeCount?: number
  genre?: string
  image?: IImage
  language?: string
  nextEpisode?: IEpisode
  primaryColor?: string
  seasons?: ISeason[]
  slug?: string
  title?: string
  tvChannel?: string
}

export interface IShowResponse {
  image: string
  slug: string
  title: string
}
