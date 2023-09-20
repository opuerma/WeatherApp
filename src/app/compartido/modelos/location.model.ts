export interface SearchLocation {
    id: number
    name: string
    region: string
    country: string
    lat: number
    lon: number
    url: string
}

export interface ForecastData {
  date: string
  maxtemp_c: number
  mintemp_c: number
  icon: string
  text: string
}
  