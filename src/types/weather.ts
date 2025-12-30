export interface WeatherData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly?: {
    time: string[]
    temperature_2m?: number[]
    relative_humidity_2m?: number[]
    precipitation?: number[]
    wind_speed_10m?: number[]
    wind_direction_10m?: number[]
    pressure_msl?: number[]
    cloud_cover?: number[]
    visibility?: number[]
  }
  hourly_units?: {
    [key: string]: string
  }
  current?: {
    time: string
    interval: number
    temperature_2m?: number
    relative_humidity_2m?: number
    precipitation?: number
    wind_speed_10m?: number
    wind_direction_10m?: number
    pressure_msl?: number
    cloud_cover?: number
    visibility?: number
  }
  current_units?: {
    [key: string]: string
  }
  daily?: {
    time: string[]
    temperature_2m_max?: number[]
    temperature_2m_min?: number[]
    precipitation_sum?: number[]
    wind_speed_10m_max?: number[]
  }
  daily_units?: {
    [key: string]: string
  }
}

type TFunction = (key: string) => string

export function getWindDirection(degrees: number, t?: TFunction): string {
  const directions = [
    { vi: 'Bắc', en: 'North' },
    { vi: 'Đông Bắc', en: 'Northeast' },
    { vi: 'Đông', en: 'East' },
    { vi: 'Đông Nam', en: 'Southeast' },
    { vi: 'Nam', en: 'South' },
    { vi: 'Tây Nam', en: 'Southwest' },
    { vi: 'Tây', en: 'West' },
    { vi: 'Tây Bắc', en: 'Northwest' },
  ]
  const index = Math.round(degrees / 45) % 8
  const direction = directions[index]
  
  if (t) {
    return t(`windDirection.${index}`)
  }
  
  // Fallback to Vietnamese if no translation function
  return direction.vi
}

export function getWeatherIcon(cloudCover: number, precipitation: number): string {
  if (precipitation > 0) {
    return '🌧️'
  }
  if (cloudCover < 25) {
    return '☀️'
  }
  if (cloudCover < 50) {
    return '⛅'
  }
  if (cloudCover < 75) {
    return '☁️'
  }
  return '☁️'
}



