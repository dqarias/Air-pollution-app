const URL_BACKEND = 'http://api.openweathermap.org/data/2.5/air_pollution';
const KEY = '3791b4d78793009d07ca991c93ad61af';

const airPollutionUrl = (lat, long) => `${URL_BACKEND}?lat=${lat}&lon=${long}&appid=${KEY}`;
