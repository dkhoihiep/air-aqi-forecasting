import { Layout, Typography, Select } from 'antd'
import { CloudOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import AirQualityDashboard from './components/AirQualityDashboard'

const { Header, Content } = Layout
const { Title } = Typography
const { Option } = Select

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#001529',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CloudOutlined style={{ fontSize: 24, color: '#fff', marginRight: 16 }} />
          <Title level={4} style={{ margin: 0, color: '#fff' }}>
            {t('header.title')}
          </Title>
        </div>
        <Select
          value={i18n.language}
          onChange={changeLanguage}
          style={{ width: 120 }}
        >
          <Option value="vi">Tiếng Việt</Option>
          <Option value="en">English</Option>
        </Select>
      </Header>
      <Content
        style={{
          margin: '24px',
          padding: 24,
          minHeight: 280,
          background: '#fff',
          borderRadius: 8,
        }}
      >
        <AirQualityDashboard />
      </Content>
    </Layout>
  )
}

export default App

