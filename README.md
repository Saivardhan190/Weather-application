# 🌤️ Weather Application

A beautiful, interactive weather forecast application with dynamic day/night themes and animated scenery. Get real-time weather information for any city around the world with a visually appealing interface.

![HTML](https://img.shields.io/badge/HTML-17.6%25-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-28.4%25-yellow)
![CSS](https://img.shields.io/badge/CSS-54%25-blue)

## ✨ Features

- 🌍 **Real-time Weather Data** - Fetch current weather information for any city using the OpenWeatherMap API
- 🌞 **Dynamic Day/Night Theme** - Automatically switches between day and night themes based on local time
- 🌳 **Animated Scenery** - Swaying trees and smooth transitions create an immersive experience
- 🎨 **Modern UI/UX** - Clean, responsive design with glassmorphism effects
- 🌡️ **Temperature Display** - Shows temperature in Celsius with weather icons
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🎯 Demo

The application displays:
- Current temperature
- Location name
- Weather icon matching current conditions
- Animated sun/moon based on time of day
- Decorative trees and ground elements

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (get one for free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository
```bash
git clone https://github.com/SaiVardhanKallempudi/Weather-application.git
```

2. Navigate to the project directory
```bash
cd Weather-application
```

3. Update the API key in `script.js` (line 35)
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

4. Open `index.html` in your web browser

## 📁 Project Structure

```
Weather-application/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── sun-removebg-preview.png
│   └── Moon1.png
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with:
  - CSS Grid & Flexbox
  - Keyframe animations
  - Gradient backgrounds
  - Glassmorphism effects
  - Responsive design
- **JavaScript (ES6+)** - Modern JavaScript features:
  - Async/Await for API calls
  - DOM manipulation
  - Event listeners
  - Error handling

## 🌐 API Reference

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

**API Endpoint:**
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

## 🎨 Features Breakdown

### Dynamic Background
- **Day Mode (6 AM - 6 PM)**: Light blue gradient with sun icon
- **Night Mode (6 PM - 6 AM)**: Dark gradient with moon icon

### Weather Information Display
- Temperature in Celsius
- City name
- Weather condition icon from OpenWeatherMap
- Error handling for invalid locations

### Animations
- Swaying tree animation
- Smooth theme transitions
- Button hover effects
- Weather icon fade-in

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sai Vardhan Kallempudi**
- GitHub: [@SaiVardhanKallempudi](https://github.com/SaiVardhanKallempudi)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Fonts from [Google Fonts (Poppins)](https://fonts.google.com/)
- Icons from OpenWeatherMap API

## 📸 Screenshots

### Day Theme
The application features a bright, sky-blue gradient background with a sun icon and green trees.

### Night Theme
The application automatically switches to a dark theme with a moon icon and darker tree colors.

---

⭐ **Star this repo** if you found it helpful!
