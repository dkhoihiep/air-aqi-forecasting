export interface AirQualityData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  hourly: {
    time: string[]
    european_aqi?: number[]
    us_aqi?: number[]
    pm2_5?: number[]
    pm10?: number[]
    carbon_monoxide?: number[]
    nitrogen_dioxide?: number[]
    sulphur_dioxide?: number[]
    ozone?: number[]
    dust?: number[]
    uv_index?: number[]
    aerosol_optical_depth?: number[]
  }
  hourly_units: {
    [key: string]: string
  }
  current?: {
    time: string
    interval: number
    european_aqi?: number
    us_aqi?: number
    pm2_5?: number
    pm10?: number
    carbon_monoxide?: number
    nitrogen_dioxide?: number
    sulphur_dioxide?: number
    ozone?: number
    dust?: number
    uv_index?: number
  }
  current_units?: {
    [key: string]: string
  }
}

export interface City {
  name: string
  latitude: number
  longitude: number
  timezone: string
}

export const VIETNAM_CITIES: City[] = [
  // Thành phố trực thuộc Trung ương
  {
    name: 'Hà Nội',
    latitude: 21.0285,
    longitude: 105.8542,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'TP. Hồ Chí Minh',
    latitude: 10.8231,
    longitude: 106.6297,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hải Phòng',
    latitude: 20.8449,
    longitude: 106.6881,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Đà Nẵng',
    latitude: 16.0544,
    longitude: 108.2022,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Cần Thơ',
    latitude: 10.0452,
    longitude: 105.7469,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  // Các tỉnh miền Bắc
  {
    name: 'Hà Giang',
    latitude: 22.8233,
    longitude: 104.9833,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Cao Bằng',
    latitude: 22.6657,
    longitude: 106.2570,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bắc Kạn',
    latitude: 22.1470,
    longitude: 105.8342,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Tuyên Quang',
    latitude: 21.8180,
    longitude: 105.2119,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Lào Cai',
    latitude: 22.4807,
    longitude: 103.9755,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Điện Biên',
    latitude: 21.4064,
    longitude: 103.0230,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Lai Châu',
    latitude: 22.3864,
    longitude: 103.4097,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Sơn La',
    latitude: 21.3257,
    longitude: 103.9167,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Yên Bái',
    latitude: 21.7025,
    longitude: 104.9119,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hoà Bình',
    latitude: 20.8133,
    longitude: 105.3383,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Thái Nguyên',
    latitude: 21.5942,
    longitude: 105.8482,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Lạng Sơn',
    latitude: 21.8536,
    longitude: 106.7610,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Quảng Ninh',
    latitude: 21.0064,
    longitude: 107.2925,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bắc Giang',
    latitude: 21.2734,
    longitude: 106.1946,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Phú Thọ',
    latitude: 21.3087,
    longitude: 105.3196,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Vĩnh Phúc',
    latitude: 21.3609,
    longitude: 105.5474,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bắc Ninh',
    latitude: 21.1861,
    longitude: 106.0763,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hải Dương',
    latitude: 20.9373,
    longitude: 106.3146,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hưng Yên',
    latitude: 20.6564,
    longitude: 106.0519,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hà Nam',
    latitude: 20.5450,
    longitude: 105.9096,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Thái Bình',
    latitude: 20.4465,
    longitude: 106.3366,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Nam Định',
    latitude: 20.4201,
    longitude: 106.1782,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Ninh Bình',
    latitude: 20.2539,
    longitude: 105.9750,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  // Các tỉnh miền Trung
  {
    name: 'Thanh Hóa',
    latitude: 19.8067,
    longitude: 105.7852,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Nghệ An',
    latitude: 18.6796,
    longitude: 105.6813,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hà Tĩnh',
    latitude: 18.3428,
    longitude: 105.9059,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Quảng Bình',
    latitude: 17.4687,
    longitude: 106.6227,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Quảng Trị',
    latitude: 16.7500,
    longitude: 107.2000,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Thừa Thiên Huế',
    latitude: 16.4637,
    longitude: 107.5909,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Quảng Nam',
    latitude: 15.8801,
    longitude: 108.3380,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Quảng Ngãi',
    latitude: 15.1167,
    longitude: 108.8000,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bình Định',
    latitude: 13.7750,
    longitude: 109.2233,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Phú Yên',
    latitude: 13.0883,
    longitude: 109.0927,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Khánh Hòa',
    latitude: 12.2388,
    longitude: 109.1967,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Ninh Thuận',
    latitude: 11.5646,
    longitude: 108.9886,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bình Thuận',
    latitude: 10.9289,
    longitude: 108.1021,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  // Các tỉnh Tây Nguyên
  {
    name: 'Kon Tum',
    latitude: 14.3545,
    longitude: 108.0076,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Gia Lai',
    latitude: 13.9833,
    longitude: 108.0000,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Đắk Lắk',
    latitude: 12.6662,
    longitude: 108.0505,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Đắk Nông',
    latitude: 12.0042,
    longitude: 107.6907,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Lâm Đồng',
    latitude: 11.9404,
    longitude: 108.4580,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  // Các tỉnh miền Nam
  {
    name: 'Bình Phước',
    latitude: 11.7500,
    longitude: 106.9167,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Tây Ninh',
    latitude: 11.3104,
    longitude: 106.0983,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bình Dương',
    latitude: 11.3254,
    longitude: 106.4770,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Đồng Nai',
    latitude: 10.9574,
    longitude: 106.8429,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bà Rịa - Vũng Tàu',
    latitude: 10.3466,
    longitude: 107.0843,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Long An',
    latitude: 10.5339,
    longitude: 106.4139,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Tiền Giang',
    latitude: 10.3600,
    longitude: 106.3600,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bến Tre',
    latitude: 10.2415,
    longitude: 106.3759,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Trà Vinh',
    latitude: 9.9347,
    longitude: 106.3453,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Vĩnh Long',
    latitude: 10.2537,
    longitude: 105.9722,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Đồng Tháp',
    latitude: 10.4930,
    longitude: 105.6354,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'An Giang',
    latitude: 10.5216,
    longitude: 105.1259,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Kiên Giang',
    latitude: 9.9580,
    longitude: 105.1324,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Cà Mau',
    latitude: 9.1769,
    longitude: 105.1527,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Bạc Liêu',
    latitude: 9.2941,
    longitude: 105.7278,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Sóc Trăng',
    latitude: 9.6025,
    longitude: 105.9739,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Hậu Giang',
    latitude: 9.7844,
    longitude: 105.4706,
    timezone: 'Asia/Ho_Chi_Minh',
  },
]

type TFunction = (key: string) => string

export function getAQIStatus(
  aqi: number,
  type: 'european' | 'us' = 'european',
  t?: TFunction
): {
  level: string
  color: string
  description: string
} {
  const translate = (key: string, fallback: string) => (t ? t(key) : fallback)

  if (type === 'european') {
    if (aqi <= 20) {
      return {
        level: translate('airQuality.status.good', 'Tốt'),
        color: '#52c41a',
        description: translate('airQuality.status.good', 'Chất lượng không khí tốt'),
      }
    } else if (aqi <= 40) {
      return {
        level: translate('airQuality.status.fair', 'Khá'),
        color: '#1890ff',
        description: translate('airQuality.status.fair', 'Chất lượng không khí khá tốt'),
      }
    } else if (aqi <= 60) {
      return {
        level: translate('airQuality.status.moderate', 'Trung bình'),
        color: '#faad14',
        description: translate('airQuality.status.moderate', 'Chất lượng không khí trung bình'),
      }
    } else if (aqi <= 80) {
      return {
        level: translate('airQuality.status.poor', 'Kém'),
        color: '#ff7875',
        description: translate('airQuality.status.poor', 'Chất lượng không khí kém'),
      }
    } else if (aqi <= 100) {
      return {
        level: translate('airQuality.status.veryPoor', 'Rất kém'),
        color: '#ff4d4f',
        description: translate('airQuality.status.veryPoor', 'Chất lượng không khí rất kém'),
      }
    } else {
      return {
        level: translate('airQuality.status.hazardous', 'Nguy hiểm'),
        color: '#722ed1',
        description: translate('airQuality.status.hazardous', 'Chất lượng không khí nguy hiểm'),
      }
    }
  } else {
    // US AQI
    if (aqi <= 50) {
      return {
        level: translate('airQuality.status.good', 'Tốt'),
        color: '#52c41a',
        description: translate('airQuality.status.good', 'Chất lượng không khí tốt'),
      }
    } else if (aqi <= 100) {
      return {
        level: translate('airQuality.status.moderate', 'Trung bình'),
        color: '#faad14',
        description: translate('airQuality.status.moderate', 'Chất lượng không khí trung bình'),
      }
    } else if (aqi <= 150) {
      return {
        level: translate('airQuality.status.poor', 'Kém'),
        color: '#ff7875',
        description: translate('airQuality.status.poor', 'Không tốt cho nhóm nhạy cảm'),
      }
    } else if (aqi <= 200) {
      return {
        level: translate('airQuality.status.poor', 'Kém'),
        color: '#ff4d4f',
        description: translate('airQuality.status.poor', 'Chất lượng không khí không tốt'),
      }
    } else if (aqi <= 300) {
      return {
        level: translate('airQuality.status.veryPoor', 'Rất kém'),
        color: '#722ed1',
        description: translate('airQuality.status.veryPoor', 'Chất lượng không khí rất không tốt'),
      }
    } else {
      return {
        level: translate('airQuality.status.hazardous', 'Nguy hiểm'),
        color: '#8c8c8c',
        description: translate('airQuality.status.hazardous', 'Chất lượng không khí nguy hiểm'),
      }
    }
  }
}

