import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { AirQualityData } from '../types/airQuality'

interface AQIChartProps {
  data: AirQualityData
}

const AQIChart = ({ data }: AQIChartProps) => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language === 'vi' ? 'vi-VN' : 'en-US'

  const chartData = useMemo(() => {
    if (!data.hourly || !data.hourly.time) return []

    const times = data.hourly.time
    const aqi = data.hourly.european_aqi || data.hourly.us_aqi || []
    const pm25 = data.hourly.pm2_5 || []
    const pm10 = data.hourly.pm10 || []

    return times.map((time, index) => ({
      time: new Date(time).toLocaleString(currentLocale, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
      }),
      timestamp: time,
      AQI: aqi[index] !== undefined && aqi[index] !== null ? aqi[index] : null,
      'PM2.5': pm25[index] !== undefined && pm25[index] !== null ? pm25[index] : null,
      'PM10': pm10[index] !== undefined && pm10[index] !== null ? pm10[index] : null,
    }))
  }, [data, currentLocale])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
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
          {payload.map((entry: any, index: number) => {
            const getLabel = (name: string) => {
              if (name === 'AQI') return t('chart.aqi')
              if (name === 'PM2.5') return t('chart.pm25')
              if (name === 'PM10') return t('chart.pm10')
              return name
            }
            return (
              <p
                key={index}
                style={{
                  margin: '4px 0',
                  color: entry.color,
                  fontSize: '14px',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>{getLabel(entry.name)}:</span>{' '}
                {entry.value !== null ? entry.value.toFixed(2) : 'N/A'}
                {entry.name === 'AQI' ? '' : ' μg/m³'}
              </p>
            )
          })}
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

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
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
        <YAxis stroke="#666" style={{ fontSize: '12px' }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="line"
        />
        <ReferenceLine y={50} stroke="#faad14" strokeDasharray="3 3" label={t('chart.warningThreshold')} />
        <Line
          type="monotone"
          dataKey="AQI"
          stroke="#1890ff"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.aqi')}
          animationDuration={1000}
        />
        <Line
          type="monotone"
          dataKey="PM2.5"
          stroke="#52c41a"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.pm25Unit')}
          animationDuration={1000}
        />
        <Line
          type="monotone"
          dataKey="PM10"
          stroke="#ff7875"
          strokeWidth={2.5}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          name={t('chart.pm10Unit')}
          animationDuration={1000}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AQIChart
