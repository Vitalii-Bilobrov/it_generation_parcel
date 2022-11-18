import { format, compareAsc } from 'date-fns';
import { createClient } from 'pexels';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '95632b02f9162f375a368971925f5209';
const API_KEY_SECOND = `5799f8036ce54ed6a10655a7a6619046`;

const wraperEl = document.querySelector('.js-weather__wrapper');

function success(pos) {
  const crd = pos.coords;

  fetchCurrentWeatherByCoords(crd.latitude, crd.longitude).then(data => {
    createMarkup(data, wraperEl);
  });
  getPlaceInfo(crd.latitude, crd.longitude)
    .then(info => {
      return info.results[0].components.city;
    })
    .then(city => {
      const query = city;
      const client = createClient(
        '563492ad6f91700001000001a1215475e7a64958baadc8684534de88'
      );
      client.photos.search({ query, per_page: 2}).then(result => {
   
        console.log(result);
        document.body.style.cssText = `background-image: url('${result.photos[0].src.original}'); background-size: cover; background-repeat: no-repeat
` ;
      });
    });
}

function getPlaceInfo(lat, lot) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat},+${lot}&key=${API_KEY_SECOND}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);

function fetchCurrentWeatherByCoords(lat, lon) {
  const searchParams = new URLSearchParams({
    lang: 'ua',
    units: 'metric',
    appid: API_KEY,
    lon,
    lat,
  });
  console.log(searchParams.toString());
  const URL = `${BASE_URL}/weather?${searchParams}`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

export const fetchCurrentWeather = weatherQuery => {
  const searchParams = new URLSearchParams({
    q: weatherQuery,
    lang: 'ua',
    units: 'metric',
    appid: API_KEY,
  });

  return fetch(`${BASE_URL}/weather?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

function createMarkup(data, el) {
  const sunRise = format(new Date(data.sys.sunrise * 1000), 'HH:mm');
  const sunSet = format(new Date(data.sys.sunset * 1000), 'HH:mm');

  el.innerHTML = `<div class="weather__card">
        <h2 class="city-name">${data.name}</h2>
        <ul class="weather-info list">
            <li class="weather-info-item">
                <p class="temp">Температура: ${data.main.temp}<sup>&#176;</sup></p>
            </li>
            <li class="weather-info-item">
                <p class="feels-like-temp">Відчувається як: ${data.main.feels_like}<sup>&#176;</sup></p>
            </li>
            <li class="weather-info-item">
                <p class="sunrise-time">Схід сонця: ${sunRise}</p>
            </li>
            <li class="weather-info-item">
                <p class="sunset-time">Захід сонця: ${sunSet}</p>
            </li>
            <li class="weather-info-item">
                <p class="clouds">Хмарність: ${data.clouds.all}%</p>
            </li>
        </ul>
    </div>`;
}
