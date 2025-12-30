import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Card,
  Select,
  Space,
  Typography,
  Tag,
  Alert,
  Spin,
  Table,
  Descriptions,
  Tooltip,
  Tabs,
} from 'antd'
import {
  ReloadOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { fetchAirQuality, fetchCurrentAirQuality } from '../services/airQualityApi'
import { fetchWeather, fetchCurrentWeather } from '../services/weatherApi'
import { AirQualityData, VIETNAM_CITIES, City } from '../types/airQuality'
import { WeatherData } from '../types/weather'
import AQIChart from './AQIChart'
import CurrentAirQuality from './CurrentAirQuality'
import WeatherCard from './WeatherCard'
import WeatherChart from './WeatherChart'

const { Title } = Typography
const { Option } = Select

const AirQualityDashboard = () => {
  const { t } = useTranslation()
  const [selectedCity, setSelectedCity] = useState<City>(VIETNAM_CITIES[0])
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(null)
  const [currentData, setCurrentData] = useState<AirQualityData | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const [forecastData, currentDataResult, weatherForecast, currentWeatherData] = await Promise.all([
        fetchAirQuality(selectedCity, 5),
        fetchCurrentAirQuality(selectedCity),
        fetchWeather(selectedCity, 5),
        fetchCurrentWeather(selectedCity),
      ])

      setAirQualityData(forecastData)
      setCurrentData(currentDataResult)
      setWeatherData(weatherForecast)
      setCurrentWeather(currentWeatherData)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t('errors.loadData')
      setError(errorMessage)
      console.error('Error loading data:', err)
    } finally {
      setLoading(false)
    }
  }, [selectedCity, t])

  useEffect(() => {
    let isCancelled = false

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const [forecastData, currentDataResult, weatherForecast, currentWeatherData] = await Promise.all([
          fetchAirQuality(selectedCity, 5),
          fetchCurrentAirQuality(selectedCity),
          fetchWeather(selectedCity, 5),
          fetchCurrentWeather(selectedCity),
        ])

        if (!isCancelled) {
          setAirQualityData(forecastData)
          setCurrentData(currentDataResult)
          setWeatherData(weatherForecast)
          setCurrentWeather(currentWeatherData)
        }
      } catch (err) {
        if (!isCancelled) {
          const errorMessage =
            err instanceof Error ? err.message : t('errors.loadData')
          setError(errorMessage)
          console.error('Error loading data:', err)
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isCancelled = true
    }
  }, [selectedCity, t])

  const handleCityChange = (cityName: string) => {
    const city = VIETNAM_CITIES.find((c) => c.name === cityName)
    if (city) {
      setSelectedCity(city)
    }
  }

  const tableColumns = [
    {
      title: t('airQuality.details.index'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('airQuality.details.currentValue'),
      dataIndex: 'value',
      key: 'value',
      render: (value: number, record: { unit: string }) =>
        value !== undefined && value !== null
          ? `${value.toFixed(2)} ${record.unit}`
          : 'N/A',
    },
    {
      title: t('airQuality.details.description'),
      dataIndex: 'description',
      key: 'description',
    },
  ]

  const tableData = currentData?.current
    ? [
        {
          key: '1',
          name: t('airQuality.pm25'),
          value: currentData.current.pm2_5,
          unit: 'μg/m³',
          description: t('table.pm25Desc'),
        },
        {
          key: '2',
          name: t('airQuality.pm10'),
          value: currentData.current.pm10,
          unit: 'μg/m³',
          description: t('table.pm10Desc'),
        },
        {
          key: '3',
          name: t('airQuality.no2'),
          value: currentData.current.nitrogen_dioxide,
          unit: 'μg/m³',
          description: t('table.no2Desc'),
        },
        {
          key: '4',
          name: t('airQuality.o3'),
          value: currentData.current.ozone,
          unit: 'μg/m³',
          description: t('table.o3Desc'),
        },
        {
          key: '5',
          name: t('airQuality.so2'),
          value: currentData.current.sulphur_dioxide,
          unit: 'μg/m³',
          description: t('table.so2Desc'),
        },
        {
          key: '6',
          name: t('airQuality.co'),
          value: currentData.current.carbon_monoxide,
          unit: 'μg/m³',
          description: t('table.coDesc'),
        },
        {
          key: '7',
          name: t('airQuality.dust'),
          value: currentData.current.dust,
          unit: 'μg/m³',
          description: t('table.dustDesc'),
        },
        {
          key: '8',
          name: t('airQuality.uvIndex'),
          value: currentData.current.uv_index,
          unit: 'Index',
          description: t('table.uvIndexDesc'),
        },
      ]
    : []

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          <EnvironmentOutlined /> {t('header.title')}
        </Title>
        <Space>
          <Select
            value={selectedCity.name}
            onChange={handleCityChange}
            style={{ width: 200 }}
            size="large"
          >
            {VIETNAM_CITIES.map((city) => {
              const cityName = t(`cities.${city.name}`, city.name)
              return (
                <Option key={city.name} value={city.name}>
                  {cityName}
                </Option>
              )
            })}
          </Select>
          <ReloadOutlined
            onClick={loadData}
            style={{ fontSize: 20, cursor: 'pointer' }}
            spin={loading}
          />
        </Space>
      </div>

      {error && (
        <Alert
          message={t('common.error')}
          description={error}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)}
        />
      )}

      {loading && !airQualityData ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Tabs
            defaultActiveKey="weather"
            items={[
              {
                key: 'weather',
                label: t('tabs.weather'),
                children: (
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {/* Current Weather */}
                    {currentWeather?.current && (
                      <Card
                        title={
                          <Space>
                            <span>{t('weather.current')}</span>
                            <Tag color="green">{t('common.current')}</Tag>
                          </Space>
                        }
                      >
                        <WeatherCard data={currentWeather} />
                      </Card>
                    )}

                    {/* Weather Forecast Chart */}
                    {weatherData && (
                      <Card
                        title={
                          <Space>
                            <span>{t('weather.forecast')}</span>
                            <Tooltip title={t('weather.forecastTooltip')}>
                              <Tag color="blue" icon={<InfoCircleOutlined />}>
                                {t('common.forecast')}
                              </Tag>
                            </Tooltip>
                          </Space>
                        }
                        extra={
                          <Tooltip title={t('weather.forecastTooltip')}>
                            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                              <InfoCircleOutlined /> {t('common.fromModel')}
                            </Typography.Text>
                          </Tooltip>
                        }
                      >
                        <WeatherChart data={weatherData} />
                      </Card>
                    )}
                  </Space>
                ),
              },
              {
                key: 'air-quality',
                label: t('tabs.airQuality'),
                children: (
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {/* Current Air Quality */}
                    {currentData?.current && (
                      <Card
                        title={
                          <Space>
                            <span>{t('airQuality.current')}</span>
                            <Tag color="green">{t('common.current')}</Tag>
                          </Space>
                        }
                      >
                        <CurrentAirQuality data={currentData} city={selectedCity} />
                      </Card>
                    )}

                    {/* Air Quality Forecast Chart */}
                    {airQualityData && (
                      <Card
                        title={
                          <Space>
                            <span>{t('airQuality.forecast')}</span>
                            <Tooltip title={t('airQuality.forecastTooltip')}>
                              <Tag color="blue" icon={<InfoCircleOutlined />}>
                                {t('common.forecast')}
                              </Tag>
                            </Tooltip>
                          </Space>
                        }
                        extra={
                          <Tooltip title={t('airQuality.forecastTooltip')}>
                            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                              <InfoCircleOutlined /> {t('common.fromModel')}
                            </Typography.Text>
                          </Tooltip>
                        }
                      >
                        <AQIChart data={airQualityData} />
                      </Card>
                    )}

                    {/* Detailed Table */}
                    {currentData?.current && (
                      <Card title={t('airQuality.details.title')}>
                        <Table
                          columns={tableColumns}
                          dataSource={tableData}
                          pagination={false}
                          size="middle"
                        />
                      </Card>
                    )}

                    {/* Information Card */}
                    <Card title={t('info.title')}>
                      <Descriptions column={1} bordered>
                        <Descriptions.Item label={t('common.city')}>
                          {t(`cities.${selectedCity.name}`, selectedCity.name)}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('common.coordinates')}>
                          {selectedCity.latitude.toFixed(4)}, {selectedCity.longitude.toFixed(4)}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('common.timezone')}>
                          {selectedCity.timezone}
                        </Descriptions.Item>
                      </Descriptions>
                    </Card>
                  </Space>
                ),
              },
            ]}
          />
        </>
      )}
    </Space>
  )
}

export default AirQualityDashboard

