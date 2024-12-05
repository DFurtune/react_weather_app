# Weather Application with AI Insights
This project is a web application that displays the current weather for a selected city and provides personalized recommendations on what to wear based on weather conditions. I used React for building the interface, integrated the OpenWeatherMap API for fetching weather data, and Cohere AI for generating clothing recommendations.

# Technologies Used
- **React:** Used for building the user interface with functional components and hooks, including `useState` and `useEffect`.
- **Material-UI:** For UI components like buttons, typography, and skeleton loaders for data fetching.
- **Cohere AI:** Integrated for generating AI-powered recommendations on what to wear based on current weather conditions.
- **OpenWeatherMap API:** For fetching real-time weather data.
- **Moment.js:** For formatting time and date, such as sunrise and sunset times.
- **Axios:** For making HTTP requests to the OpenWeatherMap API.

# Hooks and Integrations Used
- **useState:** For managing state in components (e.g., weather data, loading status, error handling).
- **useEffect:** For making asynchronous requests to the APIs when the city changes or during initial data loading.
- **useContext:** For managing the selected city across components using React Context.

# Libraries
- **Material-UI:** Used UI components like `Typography`, `Box`, `Button`, `Grid`, and `Skeleton` to build a responsive and polished interface.
- **Moment.js:** For working with time and date formatting to display local time, sunrise, and sunset times.
- **Axios:** For handling API requests to the OpenWeatherMap API.
- **Cohere AI SDK:** For interacting with Cohere AI to generate clothing recommendations based on weather conditions.

# Application Functionality
- **City Input:** Users can input a city name to fetch its weather data.
- **Weather Display:** The application displays the current temperature, weather conditions, wind speed, humidity, pressure, and more.
- **AI Recommendations:** Based on the weather data, the app generates AI-powered clothing recommendations.
- **Loading State:** While data is being fetched, skeleton loaders are shown to improve the user experience.


# React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
