# Air Quality & Weather Dashboard

Frontend application built with React, TypeScript, and Ant Design to monitor and forecast air quality and weather in Vietnam.

## Features

- ✅ React 18 with TypeScript
- ✅ Ant Design 5 for UI components
- ✅ Vite for fast build tool
- ✅ **Multi-language** (Vietnamese / English) with react-i18next
- ✅ **Air Quality Dashboard** with realtime data
- ✅ **Weather Dashboard** with realtime data
- ✅ **AQI Display** (Air Quality Index) for cities in Vietnam
- ✅ **Weather Display**: Temperature, humidity, precipitation, wind, pressure, visibility
- ✅ **AI-powered Forecast Charts** 5-day forecast for AQI, PM2.5, PM10
- ✅ **AI-powered Weather Forecast Charts** 5-day forecast for temperature, humidity, precipitation, wind speed
- ✅ **City Selection**: Support for 63 provinces/cities in Vietnam
- ✅ **Detailed Statistics**: PM2.5, PM10, NO₂, O₃, SO₂, CO, Dust, UV Index
- ✅ **Current and Forecast Data**: Clear distinction between measured data and AI predictions

## Installation

```bash
# Install dependencies
npm install
```

## Running the Application

```bash
# Run development server
npm run dev
```

The application will open at `http://localhost:3006`

## Build

```bash
# Build for production
npm run build
```

## Preview Production Build

```bash
# Preview build
npm run preview
```

## Project Structure

```
air/
├── src/
│   ├── components/           # React components
│   │   ├── AirQualityDashboard.tsx  # Main dashboard (air quality & weather)
│   │   ├── CurrentAirQuality.tsx   # Display current AQI
│   │   ├── AQIChart.tsx            # Air quality forecast chart
│   │   ├── WeatherCard.tsx         # Display current weather
│   │   └── WeatherChart.tsx        # Weather forecast chart
│   ├── services/             # API services
│   │   ├── airQualityApi.ts  # Service to fetch air quality data
│   │   └── weatherApi.ts     # Service to fetch weather data
│   ├── types/               # TypeScript types
│   │   ├── airQuality.ts    # Types for air quality data
│   │   └── weather.ts       # Types for weather data
│   ├── i18n/                # Internationalization
│   │   ├── config.ts        # i18n configuration
│   │   └── locales/         # Translation files
│   │       ├── vi.json      # Vietnamese
│   │       └── en.json      # English
│   ├── App.tsx              # Main component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite config
```

## Technologies Used

- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **Ant Design 5.12.8** - UI component library
- **Recharts 2.10.3** - Charts library for graphs
- **react-i18next 13.5.0** - Internationalization
- **i18next 23.7.6** - i18n framework
- **Vite 5.0.8** - Build tool

## Data Sources

### Realtime Data
- Air quality and weather data updated in real-time
- Metrics are continuously measured and updated
- Support for monitoring 63 provinces/cities in Vietnam

### AI-Powered Forecasts
- Uses AI models to forecast air quality and weather
- 5-day forecast with high accuracy
- Forecast data is periodically updated from prediction models

## Features

### Supported Provinces/Cities
Full support for 63 provinces/cities in Vietnam, including:
- 5 centrally-governed cities: Hanoi, Ho Chi Minh City, Hai Phong, Da Nang, Can Tho
- 58 other provinces/cities nationwide

### Air Quality Indices
- **AQI** (Air Quality Index) - Comprehensive air quality index (European/US)
- **PM2.5** - Fine particulate matter 2.5 micrometers
- **PM10** - Fine particulate matter 10 micrometers
- **NO₂** - Nitrogen Dioxide
- **O₃** - Ozone
- **SO₂** - Sulphur Dioxide
- **CO** - Carbon Monoxide
- **Dust** - Desert dust
- **UV Index** - Ultraviolet index

### Weather Indices
- **Temperature** - Air temperature (°C)
- **Humidity** - Relative humidity (%)
- **Precipitation** - Rainfall (mm)
- **Wind Speed** - Wind speed (km/h)
- **Wind Direction** - Wind direction (8 main directions)
- **Pressure** - Atmospheric pressure (hPa)
- **Cloud Cover** - Cloud coverage percentage (%)
- **Visibility** - Visibility distance (km)

### AQI Levels (European)
- **Good** (0-20) - Good air quality
- **Fair** (21-40) - Fairly good air quality
- **Moderate** (41-60) - Moderate air quality
- **Poor** (61-80) - Poor air quality
- **Very Poor** (81-100) - Very poor air quality
- **Hazardous** (>100) - Hazardous air quality

### AQI Levels (US)
- **Good** (0-50) - Good air quality
- **Moderate** (51-100) - Moderate air quality
- **Unhealthy for Sensitive Groups** (101-150)
- **Unhealthy** (151-200) - Unhealthy air quality
- **Very Unhealthy** (201-300) - Very unhealthy air quality
- **Hazardous** (>300) - Hazardous air quality

## Special Features

- **Realtime Data**: Real-time updates of measured data
- **AI-Powered Forecasts**: Uses AI models to accurately forecast air quality and weather
- **Current vs Forecast Data Distinction**: Application clearly displays measured data and AI forecast data
- **Multi-language**: Support for switching between Vietnamese and English
- **Responsive Design**: Optimized for all devices
- **Real-time Updates**: Data automatically updates when selecting a different city

## Future Development

You can extend the application by:

1. Improving AI models for more accurate predictions
2. Adding international cities
3. Adding alerts when AQI exceeds safe thresholds
4. Adding feature to compare air quality between cities
5. Adding feature to save data history
6. Adding push notifications when air quality changes
7. Integrating additional AI models to increase forecast accuracy
