<p align="center">
  <img src="./img.png" alt="BlackHole Banner" width="100%">
</p>

# BlackHole: The Gravity of the Scroll 🎯

## Basic Details

**Team Name:** Fathima Labeeba K - Individual Project

**College Name:** MAMO College Manassery

**Hosted Project Link:** [INSERT HOSTED LINK]

**Project Description:**  
BlackHole is an interactive web experience that simulates social media addiction by exposing how infinite scrolling, notifications, and dopamine triggers trap users' attention. It tracks behavior in real-time and provides AI-powered insights to help users break free from digital addiction and build healthier habits.

## The Problem Statement

Social media platforms use sophisticated algorithms designed to maximize user engagement through infinite scrolling, variable reward systems, and constant notifications. Users often spend hours mindlessly scrolling without realizing how much time they've lost, leading to decreased productivity, mental health issues, and addiction-like behaviors.

## The Solution

BlackHole creates an immersive simulation that:
1. **Exposes the trap**: Users experience a realistic infinite scroll feed that mimics Instagram/TikTok
2. **Tracks behavior**: Monitors time spent, scroll distance, and notification interactions in real-time
3. **Reveals the impact**: Shows users exactly how much time they've wasted with data visualizations
4. **Provides escape**: Offers a structured digital detox plan with actionable steps
5. **Motivates change**: Uses AI to generate personalized insights and recommendations

---

## Technical Details

### Technologies/Components Used

**Languages:**
- JavaScript (ES6+)
- HTML5
- CSS3

**Frameworks:**
- React 19.2.0
- Vite 7.3.1

**Libraries:**
- `framer-motion` (12.34.0) - Advanced animations and transitions
- `react-router-dom` (7.13.0) - Client-side routing
- `@google/generative-ai` (0.24.1) - AI-powered insights generation
- `tailwindcss` (4.1.18) - Utility-first CSS framework
- `clsx` & `tailwind-merge` - Dynamic className management

**Tools:**
- VS Code with Cursor AI
- Git & GitHub
- npm (Package management)
- ESLint (Code quality)

---

## Features

### 1. **Immersive Infinite Scroll Simulation**
A pixel-perfect recreation of modern social media feeds with:
- Auto-loading posts with realistic images (via Picsum API)
- Instagram-style UI with likes, comments, and share buttons
- Smooth animations and dopamine-triggering interactions
- Mobile phone container design (380px × 90vh)

### 2. **Real-Time Behavior Tracking**
Hidden metrics that monitor user engagement:
- **Time Spent**: Tracks every second from page load
- **Scroll Count**: Counts individual scroll actions
- **Scroll Distance**: Calculates total thumb travel distance (in km)
- **Notification Interactions**: Logs every fake notification shown

### 3. **Glitch Reveal & Data Visualization**
After 60 seconds or 50 scrolls, the simulation "traps" the user with:
- Cinematic glitch transition effect
- Large "TRAPPED" message
- Three waste metric cards showing:
  - Time Lost (with animated progress bar)
  - Distance Traveled (with circular SVG progress ring)
  - Dopamine Hits (with animated bar chart)

### 4. **AI-Powered Personalized Insights**
Integration with Google's Gemini AI to:
- Analyze user scrolling behavior patterns
- Generate custom recommendations
- Provide psychological insights about digital addiction
- Fallback to intelligent mock reports when API unavailable

### 5. **Interactive Digital Detox Plan**
Three-step escape plan with toggle switches:
- **Add Friction**: Instructions to disable infinite scroll on Instagram, TikTok, YouTube
- **Kill Dopamine**: Guide to enable grayscale mode on iOS/Android
- **20-Minute Rule**: Physical boundaries (no phone first/last 20 min of day, during meals)

### 6. **Cinematic Black Hole Animation**
Landing page features:
- Multi-layered rotating accretion disks
- Pulsing neon glow effects (purple/blue)
- 100 animated stars with random twinkling
- Gradient text with shimmer animations
- Custom CSS keyframe animations

### 7. **Nature-Themed Exit Experience**
Final page with bright, calming design:
- Sky-to-earth gradient background
- Floating particle animations
- "Close this tab and go outside" CTA
- Stark contrast to dark theme (psychological reset)

---

## Implementation

### Installation

```bash
# Clone the repository
git clone [INSERT REPO URL]
cd black-hole

# Install dependencies
npm install
```

### Run

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

**Development Server:** `http://localhost:5174`

---

## Project Documentation

### Screenshots

![Landing Page - Event Horizon](screenshots/landing-page.png)
*The Event Horizon: Animated black hole with neon accretion disks, starfield background, and glowing "Enter the Void" button*

![Simulation - Infinite Scroll](screenshots/simulation.png)
*The Singularity: Instagram-style infinite scroll feed with auto-generated posts, random notifications, and hidden tracking*

![Report - Reality Check](screenshots/report.png)
*Reality Check: Glitch reveal showing "TRAPPED" message with waste metrics (time, distance, dopamine hits) and data visualizations*

![Escape Plan](screenshots/escape-plan.png)
*The Escape Plan: Clean, minimalist digital detox guide with interactive toggle switches for commitment tracking*

![Return Page](screenshots/return.png)
*The Return: Bright nature-themed conclusion with floating particles and exit CTA*

### Diagrams

#### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    React Application                     │
│                     (Vite + React 19)                    │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Landing    │  │  Simulation  │  │    Report    │  │
│  │     Page     │→ │     Lab      │→ │     Page     │  │
│  │ (Black Hole) │  │ (Inf. Scroll)│  │  (Metrics)   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         ↓                  ↓                  ↓          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Framer       │  │ React Router │  │  Gemini AI   │  │
│  │ Motion       │  │  (Routing)   │  │   (Insights) │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         ↓                  ↓                  ↓          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Escape Plan │  │    Return    │  │  Tailwind    │  │
│  │   (Detox)    │  │     Page     │  │     CSS      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

#### Application Workflow

```
User Journey Flow:

1. LANDING (Event Horizon)
   ↓
   [User clicks "Enter the Void"]
   ↓
2. SIMULATION (Singularity)
   ↓
   [Tracking: Time, Scrolls, Distance, Notifications]
   ↓
   [Trigger: 60s OR 50 scrolls]
   ↓
3. REPORT (Reality Check)
   ↓
   [Glitch Effect → Show Metrics → AI Analysis]
   ↓
   [User clicks "See Your Escape Plan"]
   ↓
4. ESCAPE PLAN (Solution)
   ↓
   [User toggles commitments: Friction, Grayscale, 20-Min Rule]
   ↓
   [User clicks "I'm Ready to Return"]
   ↓
5. RETURN (Conclusion)
   ↓
   [User clicks "Close this tab and go outside"]
   ↓
   [Tab closes / User exits]
```

#### Data Flow

```
SimulationLab Component:
┌─────────────────────────────────────┐
│  State Management (React Hooks)     │
├─────────────────────────────────────┤
│  • timeSpent (seconds)              │
│  • scrollCount (integer)            │
│  • scrollDistance (pixels)          │
│  • notificationCount (integer)      │
│  • posts[] (array of post objects)  │
└─────────────────────────────────────┘
         ↓
    [useEffect Hooks]
         ↓
┌─────────────────────────────────────┐
│  Real-time Tracking                 │
├─────────────────────────────────────┤
│  • Timer: setInterval (1s)          │
│  • Scroll: onScroll event           │
│  • Notifications: random interval   │
│  • Infinite Load: scroll threshold  │
└─────────────────────────────────────┘
         ↓
    [Trap Logic]
         ↓
┌─────────────────────────────────────┐
│  Navigate to /report with state:    │
│  {                                  │
│    scrollCount,                     │
│    timeSpent,                       │
│    scrollDistance,                  │
│    notificationCount                │
│  }                                  │
└─────────────────────────────────────┘
```

---

## Project Demo

### Video
[Drive](https://drive.google.com/file/d/1MTp_8Q7GCCftgJo6cizhWfln9zj-j6cD/view?usp=drivesdk) 

*The demo video showcases the complete user journey from the landing page through the simulation, glitch reveal, escape plan, and final return page. Key highlights include the black hole animation, infinite scroll mechanics, real-time tracking, data visualizations, and AI-powered insights.*

### Live Demo
[INSERT HOSTED PROJECT LINK](https://black-hole-fawn.vercel.app)

---

## AI Tools Used

### Tool: Cursor AI (with Claude/GPT-4)

**Purpose:**
- **Code Generation**: Created boilerplate React components and routing structure
- **Debugging**: Resolved state management issues and animation glitches
- **Optimization**: Improved performance of scroll tracking and animation rendering
- **README Generation**: Analyzed codebase to produce this comprehensive documentation
- **CSS Animations**: Generated custom keyframe animations and Tailwind utilities

**Key Prompts Used:**

1. **Initial Setup:**
   ```
   "Create a 5-page React app with Vite, Tailwind CSS, and Framer Motion. 
   Pages: Landing (black hole animation), Simulation (infinite scroll), 
   Report (metrics), Escape Plan (detox guide), Return (nature theme)"
   ```

2. **Feature Implementation:**
   ```
   "Implement an Instagram-style infinite scroll feed with auto-loading posts, 
   random notifications every 3-8 seconds, and hidden tracking for time, 
   scrolls, and distance. Navigate to report page after 60s or 50 scrolls."
   ```

3. **Visual Enhancement:**
   ```
   "Add custom CSS animations including glow-pulse, shimmer, gradient-shift, 
   and float. Create glassmorphism effects, neon glow utilities, and custom 
   scrollbar styling with purple/blue gradients."
   ```

4. **Debugging:**
   ```
   "The black hole animation elements are not centered. They use absolute 
   positioning - add proper centering transforms (left-1/2, top-1/2, 
   -translate-x-1/2, -translate-y-1/2) to all absolutely positioned elements."
   ```

**Percentage of AI-Generated Code:** ~40%

**Human Contributions:**
- Overall architecture and user experience design
- Feature requirements and specifications
- Design aesthetic decisions (color schemes, animations, layout)
- Integration testing and bug fixing
- Custom business logic for tracking algorithms
- AI prompt engineering and iteration
- Final polish and optimization

---

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 [INSERT NAME]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

Made with ❤️ at TinkerHub
