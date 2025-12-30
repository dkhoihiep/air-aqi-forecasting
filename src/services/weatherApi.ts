import { WeatherData } from '../types/weather'
import { City } from '../types/airQuality'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

export async function fetchWeather(
  city: City,
  forecastDays: number = 5
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: city.latitude.toString(),
    longitude: city.longitude.toString(),
    timezone: city.timezone,
    hourly: [
      'temperature_2m',
      'relative_humidity_2m',
      'precipitation',
      'wind_speed_10m',
      'wind_direction_10m',
      'pressure_msl',
      'cloud_cover',
      'visibility',
    ].join(','),
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'precipitation',
      'wind_speed_10m',
      'wind_direction_10m',
      'pressure_msl',
      'cloud_cover',
      'visibility',
    ].join(','),
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'wind_speed_10m_max',
    ].join(','),
    forecast_days: forecastDays.toString(),
  })

  const url = `${BASE_URL}?${params.toString()}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.reason || `HTTP error! status: ${response.status}`
      )
    }
    const data: WeatherData = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching weather data:', error.message)
      throw error
    }
    throw new Error('Lỗi không xác định khi tải dữ liệu thời tiết')
  }
}

export async function fetchCurrentWeather(city: City): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: city.latitude.toString(),
    longitude: city.longitude.toString(),
    timezone: city.timezone,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'precipitation',
      'wind_speed_10m',
      'wind_direction_10m',
      'pressure_msl',
      'cloud_cover',
      'visibility',
    ].join(','),
  })

  const url = `${BASE_URL}?${params.toString()}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.reason || `HTTP error! status: ${response.status}`
      )
    }
    const data: WeatherData = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching current weather data:', error.message)
      throw error
    }
    throw new Error('Lỗi không xác định khi tải dữ liệu thời tiết hiện tại')
  }
}

