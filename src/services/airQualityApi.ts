import { AirQualityData, City } from '../types/airQuality'

const BASE_URL = 'https://air-quality-api.open-meteo.com/v1/air-quality'

export async function fetchAirQuality(
  city: City,
  forecastDays: number = 5
): Promise<AirQualityData> {
  const params = new URLSearchParams({
    latitude: city.latitude.toString(),
    longitude: city.longitude.toString(),
    timezone: city.timezone,
    hourly: [
      'european_aqi',
      'us_aqi',
      'pm2_5',
      'pm10',
      'carbon_monoxide',
      'nitrogen_dioxide',
      'sulphur_dioxide',
      'ozone',
      'dust',
      'uv_index',
      'aerosol_optical_depth',
    ].join(','),
    current: [
      'european_aqi',
      'us_aqi',
      'pm2_5',
      'pm10',
      'carbon_monoxide',
      'nitrogen_dioxide',
      'sulphur_dioxide',
      'ozone',
      'dust',
      'uv_index',
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
    const data: AirQualityData = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching air quality data:', error.message)
      throw error
    }
    throw new Error('Lỗi không xác định khi tải dữ liệu chất lượng không khí')
  }
}

export async function fetchCurrentAirQuality(city: City): Promise<AirQualityData> {
  const params = new URLSearchParams({
    latitude: city.latitude.toString(),
    longitude: city.longitude.toString(),
    timezone: city.timezone,
    current: [
      'european_aqi',
      'us_aqi',
      'pm2_5',
      'pm10',
      'carbon_monoxide',
      'nitrogen_dioxide',
      'sulphur_dioxide',
      'ozone',
      'dust',
      'uv_index',
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
    const data: AirQualityData = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching current air quality data:', error.message)
      throw error
    }
    throw new Error('Lỗi không xác định khi tải dữ liệu chất lượng không khí hiện tại')
  }
}

