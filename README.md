# Islamic-Calander

A stunning, responsive Islamic calendar application that displays both Hijri and Gregorian dates with Islamic events and holidays. Built with modern web technologies and featuring beautiful Islamic-inspired design elements.

![Islamic Calendar](https://images.pexels.com/photos/8828687/pexels-photo-8828687.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 📅 Dual Calendar System
- **Hijri Calendar**: Complete Islamic lunar calendar with accurate month names in both English and Arabic
- **Gregorian Calendar**: Standard solar calendar for easy reference
- **Synchronized Display**: Both calendars shown side-by-side for each date

### 🎉 Islamic Events & Holidays
- **Major Events**: Eid al-Fitr, Eid al-Adha, Mawlid an-Nabi, Day of Ashura, and more
- **Minor Observances**: Laylat al-Bara'at, Laylat al-Qadr, and other significant dates
- **Visual Indicators**: Star icons for major events, moon icons for minor events
- **Event Details**: Full event names in both English and Arabic

### 🎨 Beautiful Design
- **Islamic Aesthetic**: Inspired by traditional Islamic art and calligraphy
- **Color Palette**: Midnight blue, gold, cream, and Islamic green
- **Typography**: Noto Naskh Arabic font for authentic Arabic text display
- **Geometric Patterns**: Subtle Islamic geometric patterns as background elements
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop

### 🌙 Interactive Features
- **Date Selection**: Click any date to view detailed information
- **Month Navigation**: Smooth navigation between months
- **Today Highlighting**: Current date prominently highlighted with golden gradient
- **Hover Effects**: Beautiful hover animations and tooltips
- **Event Sidebar**: Detailed view of selected date with all events

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd islamic-calendar-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Color Palette** - Islamic-inspired colors
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and hover effects

### Icons & Assets
- **Lucide React** - Beautiful, customizable icons
- **Custom SVG Icon** - Unique Islamic calendar tab icon
- **Arabic Typography** - Noto Naskh Arabic font

### Date Handling
- **date-fns** - Modern JavaScript date utility library
- **Custom Hijri Conversion** - Accurate Gregorian to Hijri date conversion
- **Islamic Events Database** - Comprehensive list of Islamic holidays

## 📁 Project Structure

```
islamic-calendar-app/
├── public/
│   ├── islamic-calendar-icon.svg    # Custom tab icon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CalendarGrid.tsx         # Main calendar display
│   │   ├── CalendarHeader.tsx       # Header with navigation
│   │   └── EventsSidebar.tsx        # Event details sidebar
│   ├── utils/
│   │   └── hijriCalendar.ts         # Hijri calendar utilities
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── tailwind.config.js               # Tailwind configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # Project documentation
```

## 🎨 Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Midnight Blue | `#0F1C3F` | Primary backgrounds, headers |
| Golden | `#FFD700` | Accents, highlights, today marker |
| Cream | `#FFFDD0` | Card backgrounds, soft areas |
| Islamic Green | `#2E8B57` | Event markers, Hijri dates |
| Beige | `#F5F5DC` | Secondary backgrounds |

### Typography
- **Arabic Text**: Noto Naskh Arabic - Authentic and readable
- **English Text**: Roboto - Clean and modern
- **Font Weights**: 300, 400, 500, 700 for proper hierarchy

### Components
- **Calendar Cards**: Rounded corners, subtle shadows, hover effects
- **Event Indicators**: Star and moon icons with color coding
- **Navigation**: Smooth transitions with golden accents
- **Responsive Grid**: Adapts from 7-column desktop to mobile-friendly layout


## 🔧 Customization

### Adding New Events
Edit `src/utils/hijriCalendar.ts` to add new Islamic events:

```typescript
const ISLAMIC_EVENTS: IslamicEvent[] = [
  {
    hijriMonth: 1,
    hijriDay: 1,
    name: 'Your Event Name',
    nameArabic: 'اسم الحدث بالعربية',
    type: 'major' // or 'minor'
  },
  // ... existing events
];
```

### Modifying Colors
Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'midnight-blue': '#0F1C3F',
  'golden': '#FFD700',
  'cream': '#FFFDD0',
  'islamic-green': '#2E8B57',
  // Add your custom colors
}
```

### Adjusting Layout
Modify the grid layout in `CalendarGrid.tsx` for different responsive breakpoints.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Islamic calendar calculations and event data
- Noto Naskh Arabic font by Google Fonts
- Lucide React for beautiful icons
- Islamic geometric pattern inspiration
- The Muslim community for cultural guidance

---

**Built with ❤️ for the Muslim community**

*"And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth."* - Quran 6:73

