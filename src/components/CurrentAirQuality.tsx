import { Row, Col, Typography, Tag, Progress, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import { getAQIStatus } from '../types/airQuality'
import { AirQualityData, City } from '../types/airQuality'

const { Title, Text } = Typography

interface CurrentAirQualityProps {
  data: AirQualityData
  city: City
}

const CurrentAirQuality = ({ data, city }: CurrentAirQualityProps) => {
  const { t } = useTranslation()
  const current = data.current
  if (!current) return null

  const aqi = current.european_aqi || current.us_aqi || 0
  const aqiType = current.european_aqi ? 'european' : 'us'
  const status = getAQIStatus(aqi, aqiType, t)

  const maxAQI = aqiType === 'european' ? 100 : 500
  const percentage = (aqi / maxAQI) * 100

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Text type="secondary" style={{ fontSize: 14 }}>
              {city.name}
            </Text>
            <Title level={1} style={{ margin: '8px 0', fontSize: 48 }}>
              {aqi.toFixed(0)}
            </Title>
            <Tag
              color={status.color}
              style={{
                fontSize: 16,
                padding: '4px 12px',
                borderRadius: 4,
              }}
            >
              {status.level}
            </Tag>
          </div>
          <div>
            <Text>{status.description}</Text>
            <Progress
              percent={percentage}
              strokeColor={status.color}
              showInfo={false}
              style={{ marginTop: 8 }}
            />
          </div>
        </Space>
      </Col>
      <Col xs={24} md={12}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text strong>{t('airQuality.pm25')}:</Text>
            <Text>{current.pm2_5?.toFixed(1) || 'N/A'} μg/m³</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text strong>{t('airQuality.pm10')}:</Text>
            <Text>{current.pm10?.toFixed(1) || 'N/A'} μg/m³</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text strong>{t('airQuality.no2')}:</Text>
            <Text>{current.nitrogen_dioxide?.toFixed(1) || 'N/A'} μg/m³</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text strong>{t('airQuality.o3')}:</Text>
            <Text>{current.ozone?.toFixed(1) || 'N/A'} μg/m³</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text strong>{t('airQuality.uvIndex')}:</Text>
            <Text>{current.uv_index?.toFixed(1) || 'N/A'}</Text>
          </div>
        </Space>
      </Col>
    </Row>
  )
}

export default CurrentAirQuality

