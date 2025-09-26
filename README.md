# EduTune | E-Learning Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://edu-tune-e-learning-platform.vercel.app/)

An interactive and modern E-Learning Platform built with React + Vite, styled using TailwindCSS, and enhanced with React Icons for a polished user experience.


## 🌐 Live Demo

Visit the live application: [EduTune E-Learning Platform](https://edu-tune-e-learning-platform.vercel.app/)

---


## 🚀 Features

- 📱 **Responsive UI** – Optimized for all devices  
- 📚 **Course Catalog** – Browse detailed course information  
- 🎓 **Interactive Course Pages** – Engaging and informative layouts  
- 🔍 **User-Friendly Navigation** – Intuitive multi-device navbar  
- 🏠 **Modern Homepage** – Featuring courses and teachers  
- 🛠 **Reusable Components** – Clean and maintainable structure  

---

## 🛠️ Tech Stack

- **Frontend Framework:** React  
- **Build Tool:** Vite  
- **Styling:** TailwindCSS  
- **Icons:** React Icons  
- **Deployment:** Vercel  
- **Development Tools:**  
  - ESLint for linting & code quality  

---


## 🔧 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn


### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/ABID066/EduTune-eLearning-Platform.git
   cd EduTune-eLearning-Platform
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```


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


