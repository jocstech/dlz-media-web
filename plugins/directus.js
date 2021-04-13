import { Directus } from '@directus/sdk'

export default (_ctx, inject) => {
  const directus = new Directus('https://api.dlzmedia.ca/')
  const imgURL = (asset) => {
    return `https://api.dlzmedia.ca/assets/${asset}`
  }
  inject('directus', directus)
  inject('imgURL', imgURL)
}
