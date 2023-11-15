export interface Place {
  _id: string
  name: string
  category?: string
  image: string
  address?: string
  phone?: string
  site?: string
  mapCode?: string
}

export interface Attraction extends Place {
  description?: String
}

export interface Eatery extends Place {
  serviceOptions?: [string]
  accessibility?: [string]
}

export interface Accomodation extends Place {
  characteristics?: [string]
}

export type Event = {
  _id: string
  name: string
  image: string
  startDate: Date
  endDate: Date
  location?: string
  site: string
}
