import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from 'recharts'
import { WeatherData } from '../types/weather'

interface WeatherChartProps {
  data: WeatherData
}

const WeatherChart = ({ data }: WeatherChartProps) => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language === 'vi' ? 'vi-VN' : 'en-US'

  const chartData = useMemo(() => {
    if (!data.hourly || !data.hourly.time) return []

    const times = data.hourly.time
    const temperature = data.hourly.temperature_2m || []
    const humidity = data.hourly.relative_humidity_2m || []
    const precipitation = data.hourly.precipitation || []
    const windSpeed = data.hourly.wind_speed_10m || []

    const tempKey = t('chart.temperature')
    const humidityKey = t('chart.humidity')
    const precipitationKey = t('chart.precipitation')
    const windSpeedKey = t('chart.windSpeed')

    return times.map((time, index) => ({
      time: new Date(time).toLocaleString(currentLocale, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
      }),
      timestamp: time,
      [tempKey]: temperature[index] !== undefined && temperature[index] !== null ? temperature[index] : null,
      [humidityKey]: humidity[index] !== undefined && humidity[index] !== null ? humidity[index] : null,
      [precipitationKey]: precipitation[index] !== undefined && precipitation[index] !== null ? precipitation[index] : null,
      [windSpeedKey]: windSpeed[index] !== undefined && windSpeed[index] !== null ? windSpeed[index] : null,
    }))
  }, [data, t, currentLocale])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const getUnit = (name: string) => {
        if (name === t('chart.temperature') || name === t('chart.temperatureUnit')) return '°C'
        if (name === t('chart.humidity') || name === t('chart.humidityUnit')) return '%'
        if (name === t('chart.precipitation') || name === t('chart.precipitationUnit')) return ' mm'
        if (name === t('chart.windSpeed') || name === t('chart.windSpeedUnit')) return ' km/h'
        return ''
      }

      return (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', marginBottom: '4px' }}>{label}</p>
          <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#999', fontStyle: 'italic' }}>
            * {t('chart.forecastData')}
          </p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              style={{
                margin: '4px 0',
                color: entry.color,
                fontSize: '14px',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{entry.name}:</span>{' '}
              {entry.value !== null ? entry.value.toFixed(2) : 'N/A'}
              {getUnit(entry.name)}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  if (chartData.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: '#999' }}>
        {t('chart.noData')}
      </div>
    )
  }

  const tempKey = t('chart.temperature')
  const humidityKey = t('chart.humidity')
  const precipitationKey = t('chart.precipitation')
  const windSpeedKey = t('chart.windSpeed')

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="time"
          stroke="#666"
          style={{ fontSize: '12px' }}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis
          yAxisId="left"
          stroke="#666"
          style={{ fontSize: '12px' }}
          label={{ value: t('chart.temperatureHumidityAxis'), angle: -90, position: 'insideLeft' }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#666"
          style={{ fontSize: '12px' }}
          label={{ value: t('chart.precipitationWindAxis'), angle: 90, position: 'insideRight' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="line"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey={tempKey}
          stroke="#ff4d4f"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.temperatureUnit')}
          animationDuration={1000}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey={humidityKey}
          stroke="#1890ff"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.humidityUnit')}
          animationDuration={1000}
        />
        <Bar
          yAxisId="right"
          dataKey={precipitationKey}
          fill="#52c41a"
          name={t('chart.precipitationUnit')}
          animationDuration={1000}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey={windSpeedKey}
          stroke="#faad14"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.windSpeedUnit')}
          animationDuration={1000}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default WeatherChart


