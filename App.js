import { StatusBar } from 'expo-status-bar';
import Position from './screens/Position';

/**
 * Mobile app may retrieve data through backend service. Service 
 * might be open data, or you may even impelemnt backend by yourself 
 * (using PHP or similar tehcnology). This exercise uses OpenWeatherMap 
 * API (Application Programming Interface) to retrieve weather 
 * data based on location. Service is available on https://openweathermap.org/api 
 * and you need to create an account to get free API key for 
 * using the service.
 * 
 * App consists of three components: App, Position and Weather. 
 * Create Position and Weather files under subfolder screens.
 */
export default function App() {
  return (
    <Position />
  );
}