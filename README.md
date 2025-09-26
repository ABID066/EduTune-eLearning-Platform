# EduTune - E-Learning Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://edu-tune-e-learning-platform.vercel.app/)

EduTune is a modern e-learning platform built with React and Vite, designed to provide an engaging educational experience. The platform offers a user-friendly interface for accessing various courses and educational content.

## 🚀 Features

- Responsive modern UI design
- Course catalog with detailed course information
- Interactive course details pages
- User-friendly navigation system
- Home page with featured courses
- Educational resource management

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Deployment:** Vercel
- **Development Tools:**
  - ESLint for code quality



## 🔧 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Live Demo

Visit the live application: [EduTune E-Learning Platform](https://edu-tune-e-learning-platform.vercel.app/)

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── CourseDetails/   # Course detail page components
│   │   ├── CourseBanner.jsx
│   │   ├── CourseFooterBanner.jsx
│   │   ├── CourseInfo.jsx
│   │   ├── CourseQNA.jsx
│   │   └── CourseTitle.jsx
│   ├── Home/            # Home page components
│   │   ├── AboutUs.jsx
│   │   ├── Courses.jsx
│   │   ├── Hero.jsx
│   │   └── Teachers.jsx
│   ├── Layout/          # Layout components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── Modal/           # Modal components
│   │   ├── CourseActions.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── CourseInfoGrid.jsx
│   │   ├── CourseList.jsx
│   │   ├── Modal.jsx
│   │   └── ModalWrapper.jsx
│   ├── Navbar/          # Navigation components
│   │   ├── DesktopNav.jsx
│   │   ├── MenuDropdown.jsx
│   │   ├── MobileNav.jsx
│   │   ├── SearchDropdown.jsx
│   │   └── TabletNav.jsx
│   └── Others/          # Utility components
│       ├── Image.jsx
│       └── Text.jsx
├── Pages/               # Main application pages
│   ├── CourseDetails.jsx
│   ├── Home.jsx
│   └── Layout.jsx
├── assets/              # Static assets and images
│   ├── images/          # Various images and icons
│   └── react.svg
└── main.jsx             # Application entry point
```


