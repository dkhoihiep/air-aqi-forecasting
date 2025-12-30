import { Card, Row, Col, Typography, Space, Descriptions } from 'antd'
import { useTranslation } from 'react-i18next'
import { WeatherData, getWindDirection, getWeatherIcon } from '../types/weather'

const { Title, Text } = Typography

interface WeatherCardProps {
  data: WeatherData
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const { t } = useTranslation()
  const current = data.current
  if (!current) return null

  const weatherIcon = getWeatherIcon(
    current.cloud_cover || 0,
    current.precipitation || 0
  )

  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>{weatherIcon}</div>
              <Title level={1} style={{ margin: 0, fontSize: 48 }}>
                {current.temperature_2m?.toFixed(1) || 'N/A'}°C
              </Title>
              <Text type="secondary" style={{ fontSize: 16 }}>
                {current.cloud_cover !== undefined
                  ? `${t('weather.cloudCover')}: ${current.cloud_cover}%`
                  : ''}
              </Text>
            </div>
          </Space>
        </Col>
        <Col xs={24} md={12}>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label={t('weather.humidity')}>
              {current.relative_humidity_2m?.toFixed(0) || 'N/A'}%
            </Descriptions.Item>
            <Descriptions.Item label={t('weather.precipitation')}>
              {current.precipitation?.toFixed(1) || '0'} mm
            </Descriptions.Item>
            <Descriptions.Item label={t('weather.windSpeed')}>
              {current.wind_speed_10m?.toFixed(1) || 'N/A'} km/h
            </Descriptions.Item>
            <Descriptions.Item label={t('weather.windDirection')}>
              {current.wind_direction_10m !== undefined
                ? getWindDirection(current.wind_direction_10m, t)
                : 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label={t('weather.pressure')}>
              {current.pressure_msl?.toFixed(0) || 'N/A'} hPa
            </Descriptions.Item>
            <Descriptions.Item label={t('weather.visibility')}>
              {current.visibility !== undefined
                ? `${(current.visibility / 1000).toFixed(1)} km`
                : 'N/A'}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Card>
  )
}

export default WeatherCard



