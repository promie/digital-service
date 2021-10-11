import { IShow, IShowResponse } from '../types/show'

/**
 *  Apply a filtering logic to the payload and returning
 *  shows that have the drm of true and the episode count
 *  is at least one.
 *
 * @param {array} payload
 * @returns IShowResponse[]
 */

const transformShowsData = (payload: IShow[] = []): IShowResponse[] => {
  const shows = payload?.filter(
    (show: IShow) => show.drm && show.episodeCount! > 0,
  )
  return shows?.map((show: IShow) => {
    return {
      image: show.image!.showImage!,
      slug: show.slug!,
      title: show.title!,
    }
  })
}

export default {
  transformShowsData,
}
