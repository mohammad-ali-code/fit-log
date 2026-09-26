# 🏋️ FitLog — Workout Library

**FitLog** is a modern, responsive workout library and daily workout planning application. It allows users to browse exercises, view detailed workout information, add exercises to today's plan, and save workouts for later.

The application is designed with a dark, focused gym aesthetic and provides a simple way to organize and log daily workouts.

---

## 📌 About The Project

FitLog is built around a workout library containing exercises for different muscle groups. Users can explore the available workouts, view detailed information about each exercise, and organize their workouts through the **My Plan** page.

---

## ✨ Key Features

### 🏋️ Workout Library
- Browse all available workouts from the API.
- Responsive workout card grid.
- Each workout displays:
  - Workout image
  - Muscle group/category
  - Equipment
  - Duration
  - Calories
  - Rating
- Sort workouts by:
  - Duration
  - Calories
  - Rating

### 📖 Workout Details
- Dedicated detail page for every workout.
- Large workout illustration.
- Workout description and categories.
- Equipment and difficulty information.
- Sets, reps, duration, calories, and rating.
- Step-by-step workout instructions.
- Add workouts to today's plan.
- Save workouts for later.

### 📋 My Plan
- Manage today's workouts from one place.
- Live summary of:
  - Exercises
  - Total minutes
  - Total calories
- Switch between **Today's Plan** and **Saved** workouts.
- View workout details directly from the plan.
- Mark workouts as completed.
- Remove workouts from the plan.

### 🔔 User Feedback
- Toast notifications for important actions.
- Notifications when workouts are:
  - Added to today's plan
  - Saved
  - Marked as completed
  - Removed

### 📱 Responsive Design
- Fully responsive across:
  - Mobile
  - Tablet
  - Desktop
- Responsive workout grid.
- Mobile-friendly navigation.
- Hero section adapts to smaller screens.
- Workout detail layout changes from two columns to a stacked layout.

---

## 🛠️ Technologies Used

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Libraries
- **React Icons** — Icons throughout the application
- **React Toastify** — Toast notifications

### Data
- **Workout API** — Provides workout/exercise data

### Development Tools
- **Git**
- **GitHub**
- **Vercel** — Deployment

---

## 📂 Main Pages

| Page | Description |
|---|---|
| `/` | Workout library and hero section |
| `/workout/[id]` | Individual workout details |
| `/my-plan` | Today's Plan and Saved workouts |
| `not-found.tsx` | Custom 404 page for invalid routes |

---

## 🧭 Application Flow

```text
                    ┌──────────────────┐
                    │      Home        │
                    │ Workout Library  │
                    └────────┬─────────┘
                             │
                    Select a workout
                             │
                             ▼
                  ┌────────────────────┐
                  │  Workout Details   │
                  └─────────┬──────────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          Add to Today's Plan     Save for Later
                 │                     │
                 └──────────┬──────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │    My Plan     │
                    ├────────────────┤
                    │ Today's Plan   │
                    │ Saved          │
                    └───────┬────────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          Mark as Done              Remove
```

---

## 📊 Today's Plan

The **Today's Plan** section provides a quick overview of the user's selected workouts.

The metrics are calculated dynamically:

```text
Exercises → Number of planned workouts

Minutes → Sum of workout durations

Calories → Sum of workout calories
```

---

## 🔄 Workout Actions

Users can perform several actions throughout the application.

| Action | Result |
|---|---|
| Add to Today's Plan | Adds workout to today's plan |
| Save for Later | Adds workout to Saved |
| View Details | Opens workout detail page |
| Mark as Done | Marks workout as completed |
| Remove | Removes workout from the current list |
| Sort | Reorders the current workout list |

Each important action provides visual feedback through a toast notification.

---

## ⏳ Loading & Error Handling

The application includes appropriate UI states for different situations.

### Loading State

While workout data is being fetched:

```text
Loading workouts…
```

A loading animation is displayed instead of showing an incomplete workout list.

### Empty State

When there are no workouts in a selected list:

```text
NOTHING HERE YET

Browse the library and add a lift to get today moving.
```

A **Go to workouts** button allows users to return to the workout library.

### 404 Page

A custom `not-found.tsx` page handles unknown or invalid routes.

---

## 🎨 Design

The UI follows a dark, minimal, gym-focused visual style.

### Design Characteristics

- Dark background
- High-contrast typography
- Bright lime accent color
- Rounded cards and buttons
- Workout-focused imagery
- Responsive layouts
- Clear visual hierarchy

The primary accent color is:

```text
#CCFF00
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```text
http://localhost:3000
```

---

## 📦 Build For Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```
