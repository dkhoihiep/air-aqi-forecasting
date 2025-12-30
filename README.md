# Air Quality Dashboard

Frontend ứng dụng được xây dựng với React, TypeScript và Ant Design để theo dõi và dự báo chất lượng không khí tại Việt Nam.

## Tính năng

- ✅ React 18 với TypeScript
- ✅ Ant Design 5 cho UI components
- ✅ Vite cho build tool nhanh chóng
- ✅ Layout với sidebar có thể thu gọn
- ✅ **Dashboard chất lượng không khí** với dữ liệu realtime từ Open-Meteo API
- ✅ **Dashboard thời tiết** với dữ liệu realtime từ Open-Meteo Weather API
- ✅ **Hiển thị AQI** (Air Quality Index) cho các thành phố lớn tại Việt Nam
- ✅ **Hiển thị thời tiết**: Nhiệt độ, độ ẩm, lượng mưa, gió, áp suất
- ✅ **Biểu đồ dự báo** 5 ngày cho AQI, PM2.5, PM10
- ✅ **Chọn thành phố**: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng
- ✅ **Thống kê chi tiết**: PM2.5, PM10, NO₂, O₃, SO₂, CO, Dust, UV Index
- ✅ Dashboard với thống kê
- ✅ Quản lý người dùng (CRUD)
- ✅ Trang cài đặt

## Cài đặt

```bash
# Cài đặt dependencies
npm install
```

## Chạy ứng dụng

```bash
# Chạy development server
npm run dev
```

Ứng dụng sẽ mở tại `http://localhost:3000`

## Build

```bash
# Build cho production
npm run build
```

## Preview production build

```bash
# Preview build
npm run preview
```

## Cấu trúc dự án

```
air/
├── src/
│   ├── components/           # React components
│   │   ├── Dashboard.tsx
│   │   ├── AirQualityDashboard.tsx  # Dashboard chất lượng không khí
│   │   ├── CurrentAirQuality.tsx   # Hiển thị AQI hiện tại
│   │   ├── AQIChart.tsx            # Biểu đồ dự báo
│   │   └── WeatherCard.tsx         # Hiển thị thời tiết
│   │   ├── Users.tsx
│   │   └── Settings.tsx
│   ├── services/             # API services
│   │   ├── airQualityApi.ts  # Open-Meteo Air Quality API
│   │   └── weatherApi.ts     # Open-Meteo Weather API
│   ├── types/               # TypeScript types
│   │   ├── airQuality.ts    # Types cho dữ liệu chất lượng không khí
│   │   └── weather.ts       # Types cho dữ liệu thời tiết
│   ├── App.tsx              # Component chính
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite config
```

## Công nghệ sử dụng

- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **Ant Design 5.12.8** - UI component library
- **@ant-design/charts 2.0.4** - Charts library cho biểu đồ
- **Vite 5.0.8** - Build tool
- **React Router DOM 6.21.1** - Routing (đã cài đặt, sẵn sàng sử dụng)

## API sử dụng

### 1. Open-Meteo Air Quality API
- **Miễn phí, không cần API key** ✅
- Dữ liệu chất lượng không khí theo giờ
- Dự báo 5 ngày
- Các chỉ số: AQI, PM2.5, PM10, NO₂, O₃, SO₂, CO, Dust, UV Index
- Tài liệu: https://open-meteo.com/en/docs/air-quality-api

### 2. Open-Meteo Weather API
- **Miễn phí, không cần API key** ✅
- Dữ liệu thời tiết theo giờ
- Dự báo 5 ngày
- Các chỉ số: Nhiệt độ, Độ ẩm, Lượng mưa, Tốc độ gió, Hướng gió, Áp suất, Mây che phủ, Tầm nhìn
- Tài liệu: https://open-meteo.com/en/docs

### Yêu cầu của cả 2 API
- ✅ **Hoàn toàn miễn phí** - Không cần đăng ký
- ✅ **Không cần API key** - Chỉ cần gọi trực tiếp
- ✅ **Chỉ cần tọa độ** - Latitude và Longitude
- ✅ **Rate limit** - Không có giới hạn nghiêm ngặt cho mục đích giáo dục
- ⚠️ **Giấy phép** - Miễn phí cho mục đích phi thương mại và giáo dục

## Tính năng Air Quality

### Các thành phố được hỗ trợ
- Hà Nội
- TP. Hồ Chí Minh
- Đà Nẵng

### Chỉ số hiển thị
- **AQI** (Air Quality Index) - Chỉ số chất lượng không khí tổng hợp
- **PM2.5** - Bụi mịn 2.5 micromet
- **PM10** - Bụi mịn 10 micromet
- **NO₂** - Nitrogen Dioxide
- **O₃** - Ozone
- **SO₂** - Sulphur Dioxide
- **CO** - Carbon Monoxide
- **Dust** - Bụi sa mạc
- **UV Index** - Chỉ số tia cực tím

### Mức độ AQI
- **Tốt** (0-20/50) - Chất lượng không khí tốt
- **Khá/Trung bình** (20-40/50-100) - Chất lượng không khí khá tốt/trung bình
- **Trung bình/Không tốt cho nhóm nhạy cảm** (40-60/100-150)
- **Kém/Không tốt** (60-80/150-200) - Chất lượng không khí kém
- **Rất kém** (80-100/200-300) - Chất lượng không khí rất kém
- **Nguy hiểm** (>100/>300) - Chất lượng không khí nguy hiểm

## Phát triển thêm

Bạn có thể mở rộng ứng dụng bằng cách:

1. Thêm các thành phố khác tại Việt Nam
2. Tích hợp Machine Learning để dự đoán AQI chính xác hơn
3. Thêm cảnh báo khi AQI vượt ngưỡng an toàn
4. Thêm tính năng so sánh chất lượng không khí giữa các thành phố
5. Tích hợp Weather API để phân tích tương quan giữa thời tiết và AQI
6. Thêm state management (Redux, Zustand, etc.) cho dữ liệu phức tạp hơn

