# 🧠 MindPal - Your Mental Health Companion

A responsive web application designed to provide mental health support and counseling services for migrant workers and individuals needing mental health support.

## 🚀 Features

### Core Functionality
- **Splash Screen** - Welcoming introduction with language selection
- **Multi-language Support** - English, Chinese, Tamil, Bengali, Indonesian
- **Home Dashboard** - Quick access to all services with inspirational quotes
- **Chat Counselling** - Real-time chat with counselors
- **Video Consultation** - Video call sessions with counselors
- **Appointment Booking** - Schedule appointments with preferred counselors
- **Mood Tracker** - Daily mood tracking with recommendations and visual charts
- **Emergency Support** - Quick SOS button and emergency contacts
- **Mental Health Resources** - Articles and guides on wellness topics
- **User Profile** - Manage preferences and settings

## 📁 Project Structure

```
MindPal/
├── index.html              # Entry point (splash screen)
├── script.js               # Splash screen navigation
├── language.html           # Language selection page
├── language.js             # Language selection logic
├── home.html               # Main dashboard
├── home.js                 # Dashboard functionality
├── appointment.html        # Booking page
├── appointment.js          # Booking logic
├── confirmation.html       # Booking confirmation
├── chat.html               # Chat counselling page
├── chat.js                 # Chat functionality
├── video.html              # Video consultation page
├── video.js                # Video controls
├── mood.html               # Mood tracker
├── mood.js                 # Mood tracking & charts
├── emergency.html          # Emergency support
├── emergency.js            # Emergency features
├── resources.html          # Mental health resources
├── profile.html            # User profile
├── style.css               # All styling
└── README.md               # This file
```

## 🎨 Design Features

- **Responsive Mobile-First Design** - Optimized for phones (430px width)
- **Modern UI** - Clean and intuitive interface with teal color scheme
- **Icons** - FontAwesome icons for visual clarity
- **Smooth Animations** - Hover effects and transitions
- **Bottom Navigation** - Easy access to main sections from any page
- **Accessible** - Semantic HTML and ARIA labels

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No dependencies required
- **Chart.js** - For mood visualization
- **FontAwesome Icons** - Icon library
- **Google Fonts** - Poppins typeface

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/Zulqarnain86/MindPal.git
cd MindPal
```

### Run Locally
1. Open `index.html` in your web browser
2. Or use a local server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📖 How to Use

1. **Start the app**: Open `index.html` or visit the live demo
2. **Select Language**: Choose your preferred language (stored in localStorage)
3. **Navigate**: Use the bottom navigation bar to access different features
4. **Book Appointment**: 
   - Select counselor
   - Choose date and time
   - Select consultation type
   - Add reason for consultation
5. **Chat**: Send messages to your counselor (simulated responses)
6. **Track Mood**: Log your daily mood and get personalized recommendations
7. **Emergency**: Quick access to emergency support services

## 🔑 Key Features Explained

### 1. Language Support
- User language preference stored in localStorage
- Persists across browser sessions
- Ready for multi-language content integration

### 2. Mood Tracker
- 5-level mood scale (Very Sad to Great)
- Personalized wellness recommendations
- Weekly mood visualization using Chart.js
- Emotional support guidance based on mood

### 3. Appointment Booking
- Select from 4 available counselors
- Choose from multiple date/time slots
- Choose consultation type (Chat, Video, Voice)
- Add personalized reason for consultation
- Form validation

### 4. Emergency Support
- SOS button for immediate assistance
- Quick access to mental health hotline
- Contact information for hospitals
- Employer welfare officer support
- Emergency contact option

### 5. Chat Counselling
- Real-time message interface
- Auto-reply simulation from counselor
- Message history display
- Smooth scrolling

### 6. Video Consultation
- Video call interface
- Microphone toggle
- Video toggle
- Speaker toggle
- Call timer
- End call confirmation

## 🎯 User Experience Flow

```
┌─────────────────┐
│ Splash Screen   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Language Select │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│ Home Dashboard      │
└────────┬────────────┘
         │
    ┌────┴────┬──────────┬──────────┐
    ▼         ▼          ▼          ▼
┌────────┐┌─────────┐┌──────────┐┌────────┐
│ Chat   ││ Appoint ││ Mood     ││Emergen ││
│        ││ ment    ││ Tracker  ││ cy     │
└────────┘└─────────┘└──────────┘└────────┘
```

## 📱 Responsive Design

The app is optimized for mobile devices:
- Fixed width (430px) for consistent viewing
- Touch-friendly buttons and controls
- Bottom navigation bar for easy thumb access
- Scrollable content areas
- Responsive grid layouts

## 🔐 Data Storage

- **localStorage**: Language preferences persist across sessions
- **Session data**: Chat messages and form data (client-side)
- **Ready for backend**: Structure allows easy integration with APIs

## 🚨 Emergency Features

- **SOS Button**: Triggers emergency alert
- **Simulated Emergency Call**: Uses `tel:999` protocol
- **Quick Access**: One-tap access to emergency services
- **Contact Options**: Multiple emergency contact methods

## 🎯 Future Enhancements

- [ ] Backend integration for appointment scheduling
- [ ] Real video/chat functionality with WebRTC
- [ ] User authentication and login system
- [ ] Push notifications for appointments
- [ ] Dark mode theme toggle
- [ ] Multi-language content
- [ ] Counselor profiles and ratings
- [ ] Payment integration
- [ ] Appointment history
- [ ] Medical records integration
- [ ] Telemetry and analytics
- [ ] Offline support with service workers

## 🔒 Privacy & Security

- No personal data is stored without consent
- Client-side data handling for demo
- Ready for HTTPS deployment
- Compliant with accessibility standards

## ✅ Tested & Working Features

- ✅ Language selection and persistence
- ✅ Navigation between all pages
- ✅ Appointment form validation
- ✅ Chat message sending and receiving
- ✅ Mood tracking and recommendations
- ✅ Video call controls
- ✅ Emergency button functionality
- ✅ Mobile responsiveness
- ✅ Bottom navigation bar
- ✅ Smooth animations and transitions

## 📊 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💼 Author

**Zulqarnain86**
- GitHub: [@Zulqarnain86](https://github.com/Zulqarnain86)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Start your mental health journey with MindPal today!** ❤️

For support or questions, please open an issue on GitHub.