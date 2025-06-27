# Noah Stevens - Portfolio

A modern, responsive portfolio built with React and Vite, showcasing my work as a Software Engineering student at the University of Ottawa.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Smooth Scroll Navigation**: Seamless section-to-section scrolling with scroll-snap
- **Interactive Work Process**: Click through my 6-step design process
- **Case Studies**: Links to live projects including:
  - Shift Happens - Bike Repair Shop
  - Pattern Pulse - Memory Game
  - More projects coming soon!
- **Resume Modal**: Integrated PDF viewer for my resume
- **Modern UI**: Clean, professional design with hover effects and animations

## Access 

To view my portfolio [click here](https://nstev009.github.io/)

## Color Palette

- Hunter Green: `#386150`
- Rose Pompadour: `#DC7F9B`
- Capput mortuum: `#4C2719`
- Seasalt: `#F4F7F5`
- Powder Blue: `#A2C7E5`

## Typography

- Primary Font: Roboto Mono
- Secondary Font: Bricolage Grotesque (for banners)

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS Grid and Flexbox
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── images/          # Portfolio images and assets
├── src/
│   ├── components/      # React components
│   │   ├── AboutSection.jsx
│   │   ├── CaseSection.jsx
│   │   ├── ComingSoonModal.jsx
│   │   ├── HomeSection.jsx
│   │   ├── NavigationModal.jsx
│   │   └── WorkSection.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## Components

- **HomeSection**: Landing page with name display
- **CaseSection**: Grid of project case studies
- **WorkSection**: Interactive 6-step work process
- **AboutSection**: Personal info and resume modal
- **NavigationModal**: Sticky navigation bar
- **ComingSoonModal**: Placeholder for future projects

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contact

- **Name**: Noah Stevens
- **Program**: Software Engineering, University of Ottawa
- **Status**: Looking for Fall 2025 Co-op opportunities

## License

This project is for portfolio purposes. All rights reserved.
