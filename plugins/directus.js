import { Directus } from '@directus/sdk'

export default (_ctx, inject) => {
  const directus = new Directus('https://api.dlzmedia.ca/')
  inject('directus', directus)
}
