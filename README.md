# Family Dynasty Times

A mobile-first web application that helps players of **The Godfather: Family Dynasty** track server reset times by converting UTC times to their local timezone.

![App Icon](icon-192.png)

## 🎯 Features

- **Automatic Timezone Detection** - Detects your local timezone automatically
- **Manual Timezone Selection** - Choose from 35+ worldwide timezones
- **Real-time Conversion** - All UTC server times converted to your timezone
- **iOS-style Design** - Clean, modern interface inspired by iOS
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Mobile Optimized** - Responsive design that works perfectly on all devices
- **PWA Ready** - Progressive Web App with offline capabilities

## 🕐 Tracked Events

- **Main Reset** - Daily at 00:00 UTC
- **License Refresh** - Daily at 08:00 UTC  
- **NG Bonus** - Daily at 22:00 UTC
- **FCL/KCL Events** - Tuesday, Thursday, Saturday at 14:00 & 21:00 UTC

## 🚀 Quick Start

### Use Online (Recommended)
**https://sangreal-d.github.io/gf-reset-times/**

Add to your phone's home screen for app-like experience:
- **iOS**: Tap Share → "Add to Home Screen"
- **Android**: Tap Menu → "Add to Home screen" or "Install app"

### Run Locally
```bash
git clone https://github.com/sangreal-d/gf-reset-times.git
cd gf-reset-times
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

## 📱 Installation

### As a Progressive Web App (PWA)
1. Open the app in your mobile browser
2. Tap "Add to Home Screen" when prompted
3. Launch from your home screen like a native app


## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, CSS Grid, Flexbox
- **Icons**: Inline SVG
- **PWA**: Web App Manifest, Service Worker ready
- **Storage**: localStorage for preferences
- **Responsive**: Mobile-first design approach

## 📂 Project Structure

```
gf-reset-times/
├── index.html          # Main application file
├── manifest.json       # PWA manifest
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── README.md          # This file
```

## ⚙️ Configuration

### Supported Timezones
The app includes 35+ predefined timezones covering all major regions:
- Americas (Hawaii to Brazil)
- Europe (London to Moscow + Russian regions)
- Asia-Pacific (Dubai to New Zealand)
- Auto-detection for unlisted timezones

### Theme Persistence
- Theme preference saved in localStorage
- Defaults to dark theme
- Smooth transitions between themes

## 🎨 Design Features

- **iOS-inspired UI** with rounded corners and subtle shadows
- **Responsive typography** that scales across devices
- **Accessible design** with proper ARIA labels and focus states
- **Smooth animations** for enhanced user experience
- **High contrast** for better readability


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎮 Game Information

**The Godfather: Family Dynasty** is a mobile strategy game where timing is crucial for:
- Daily rewards and bonuses
- License renewals
- Special events and competitions
- Resource management

This tool helps players worldwide coordinate their gameplay with server schedules.

## 📞 Support

- **Game Community**: [MØB] Worldwide Mob · 102-3
- **Issues**: [GitHub Issues](https://github.com/sangreal-d/gf-reset-times/issues)
- **Creator**: sangreal

## ⚠️ Disclaimer

This is an unofficial tool created by players for players. Always verify times in-game to ensure accuracy. Server times may change without notice.

---

**Made with ❤️ for The Godfather: Family Dynasty community**
