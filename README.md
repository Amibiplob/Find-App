# Find App - Mobile App Discovery Platform

A modern, responsive web application that simulates an app store experience, allowing users to browse, explore, and "install" popular mobile applications. Built with React 19, Vite, and TailwindCSS.

## ✨ Features

- **App Browsing**: Browse through a curated collection of popular mobile apps
- **Trending Section**: Discover trending apps with ratings and download counts
- **Detailed App Pages**: View comprehensive information including:
  - App description and company details
  - Download statistics and file size
  - Average ratings and total reviews
  - Interactive rating distribution charts
- **Install Functionality**: Track installed apps with localStorage persistence
- **Responsive Design**: Fully responsive UI that works seamlessly across devices
- **Toast Notifications**: Real-time feedback for user actions
- **Error Handling**: Custom error pages for better UX
- **Loading States**: Skeleton screens and loading indicators

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **React Router v7** - Client-side routing with data loaders
- **TailwindCSS v4** - Utility-first CSS framework
- **DaisyUI** - TailwindCSS component library

### Libraries & Tools
- **TanStack Query** - Powerful data fetching and caching
- **Recharts** - Composable charting library for rating visualization
- **React Toastify** - Elegant toast notifications
- **Lucide React** - Beautiful icon system
- **ESLint** - Code quality and consistency

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/Find-App.git
cd Find-App
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Find-App/
├── public/
│   ├── FakeDB.json          # Mock app data
│   └── logo.png             # App logo
├── src/
│   ├── assets/              # Images and icons
│   ├── Context/
│   │   └── AppContext.jsx   # Global state management
│   ├── Pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── AllApps.jsx      # All apps listing
│   │   ├── AppsDetails.jsx  # Individual app details
│   │   ├── InstallApps.jsx  # Installed apps page
│   │   ├── Trending.jsx     # Trending apps section
│   │   ├── Banner.jsx       # Hero banner
│   │   ├── Charts.jsx       # Rating distribution chart
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Root.jsx         # Root layout
│   │   ├── Loading.jsx      # Loading state
│   │   ├── ErrorPage.jsx    # Error boundary
│   │   └── AppErrorPage.jsx # App-specific errors
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── vercel.json              # Vercel deployment config
```

## 💾 Data Structure

The app uses a JSON file (`FakeDB.json`) to simulate a backend. Each app object contains:

```json
{
  "id": 1,
  "image": "app-icon-url",
  "title": "App Name",
  "companyName": "Company Name",
  "description": "App description",
  "size": 50,                    // Size in MB
  "reviews": 25000000,           // Total reviews
  "ratingAvg": 4.8,              // Average rating
  "downloads": 1000000000,       // Total downloads
  "ratings": [                   // Rating distribution
    { "name": "1 star", "count": 800000 },
    { "name": "2 star", "count": 700000 },
    { "name": "3 star", "count": 2000000 },
    { "name": "4 star", "count": 8000000 },
    { "name": "5 star", "count": 13500000 }
  ]
}
```

## 🎯 Key Features Implementation

### Context API for State Management
The app uses React Context to manage installed apps across components:
- Tracks which apps have been installed
- Persists state to localStorage
- Provides global access to installation status

### React Router Data Loaders
Pages use loader functions to fetch data before rendering:
```javascript
{
  path: "appsdetails/:id",
  loader: () => fetch("/FakeDB.json").then((res) => res.json()),
  Component: AppsDetails,
}
```

### LocalStorage Persistence
Installed apps are saved to localStorage, ensuring data persists across sessions:
```javascript
localStorage.setItem("allApps", JSON.stringify([...installedApps, data]));
```

### Interactive Charts
Rating distribution is visualized using Recharts with horizontal bar charts showing star-based ratings.

## 🎨 Customization

### Adding New Apps
Edit `public/FakeDB.json` and add new app objects following the existing structure.

### Styling
- Modify TailwindCSS classes in components
- Update DaisyUI theme in `tailwind.config.js` (if needed)
- Custom styles can be added to `src/index.css`

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

The `vercel.json` configuration ensures proper routing for the SPA.

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🛠️ Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Environment Variables

No environment variables are required for basic functionality. The app uses a local JSON file for data.

## 🐛 Known Issues & Future Improvements

- [ ] Add search functionality
- [ ] Implement category filtering
- [ ] Add user authentication
- [ ] Connect to real backend API
- [ ] Add app comparison feature
- [ ] Implement dark mode toggle
- [ ] Add app reviews and comments

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Md Biplob Hosain**
- GitHub: [@Amibiplob](https://github.com/Amibiplob)
- LinkedIn: [amibiplob](https://www.linkedin.com/in/amibiplob/)

## 🙏 Acknowledgments

- App data inspired by popular mobile applications
- UI/UX inspiration from Google Play Store and Apple App Store
- Icons from [Lucide React](https://lucide.dev/)

---

⭐ If you find this project useful, please consider giving it a star!