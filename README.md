# PRA#03_React-EmmaAlonsoMcCoy-WeatherApp

## Overview

This document serves as a guide and log for the frontend development  of the WeatherApp project.

---

## Project Backlog

### **🔹 Project Setup**

- [x] Set up **Git repository** and **README.md**
- [x] Create `.gitignore` and add `.env` to store API keys securely
- [ ] Study and document **OpenWeather API** (endpoints, parameters, response format)

#### **🔹 Understand New Core React Concepts**

- [ ] **useEffect Hook**: Handle API calls and side effects
- [ ] **Mapping Arrays**: Render lists dynamically (weather forecast)

#### **🔹 UI Structure & Styling**

- [ ] Define **component tree** for a one-page weather app
- [ ] Create **low-fidelity wireframe**
- [ ] Use **Material UI** for styling

#### **🔹 Development**

- [ ] Set up **React project**
- [ ] Implement **Search Component** (text input + button)
- [ ] Implement **Current Weather Display Component**
  - Show **temperature, weather condition, icon**
- [ ] Implement **5-Day Forecast Component**
  - Display daily temperature, condition, and icon
- [ ] Fetch **weather data** from OpenWeather API
- [ ] Handle API errors (invalid city, no network, etc.)

#### **🔹 Testing & Optimization**

- [ ] Write unit tests for **API call function**
- [ ] Ensure error handling works correctly
- [ ] Test UI updates when fetching new data

---

## ## ** Estimated Time for Tasks**

| Task                                  | Estimated Time | Actual Time | Impediments | New Concepts                |
| ------------------------------------- | -------------- | ----------- | ----------- | --------------------------- |
| Setup Git & README                    | 30 min         | 2 hours     | -           | -                           |
| Create `.gitignore` and `.env`        | 15 min         | 15 minutes  | -           | .env file                   |
| Study OpenWeather API                 | 1 hour         | X           | API limits? | Fetching JSON               |
| Understanding useEffect for API Calls | 45 min         | X           | -           | Side effects                |
| Understanding Mapping Arrays          | 15 min         | X           | -           | Array methods               |
| Define Component Tree                 | 30 min         | X           | -           | -                           |
| Create Wireframe                      | 1 hour         | X           | -           | -                           |
| Set up React Project                  | 30 min         | X           | -           | -                           |
| Implement Search Component            | 2 hours        | X           | -           | useState, onChange          |
| Implement Current Weather Display     | 3 hours        | X           | -           | API calls, useEffect        |
| Implement 5-Day Forecast Component    | 3 hours        | X           | -           | Mapping data                |
| Fetch & Display Weather Data          | 2 hours        | X           | -           | Async/Await                 |
| Handle API Errors                     | 1 hour         | X           | -           | Error handling              |
| Use Material UI for Styling           | 2 hours        | X           | -           | Component library           |
| Write Unit Tests                      | 2 hours        | X           | -           | Jest, React Testing Library |
| **Total**                             | **~20 hours**  | **X hours** | -           | Tasks                       |

---

## OpenWeather API Documentation

---

## Error Documentation and Solutions

### Error: `[ERROR_MESSAGE]`

**Corresponding Task:** [RELATED_TASK]

**Description:** [ERROR_DESCRIPTION]

**Error Trace:**

- **Component:** [COMPONENT_NAME]
- **File:** [FILE_NAME]
- **Line:** [ERROR_LINE]
- **Stack Trace:**
  - [ERROR_TRACE]

**Possible Causes:**

- [POTENTIAL_CAUSES]

**Solution:**

```jsx
// Fixed code or solution
```

**Explanation:** [EXPLANATION_OF_THE_SOLUTION]

---

## Future Improvements

- Improve **loading states** while fetching data

- Add a **“favorite cities”** feature

- Allow **temperature unit conversion (°C ⇄ °F)**

---
