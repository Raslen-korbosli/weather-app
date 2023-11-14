class WeatherView {
  _data;
  _parentEl = document.querySelector('.weather');
  _searchBTn = document.querySelector('.search-btn');
  _city = document.querySelector('.city-input');
  _render(data) {
    this._data = data;
    console.log(data);
    const markup = this._generateHtml();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _generateHtml() {
    return `<img class="weather-icon" src="./images/${this._data.weather.status}.png" alt="" />
    <h1 class="temp">${this._data.weather.temp}°C</h1>
    <h2 class="city">${this._data.city}</h2>
    <div class="details">
      <div class="col">
        <img src="./images/humidity.png" alt="" />
        <div>
          <p class="humidity">${this._data.weather.humidity}%</p>
          <p>humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="./images/wind.png" alt="" />
        <div>
          <p class="wind">${this._data.weather.wind} km/h</p>
          <p>wind Speed</p>
        </div>
      </div>
    </div>`;
  }
  _handleEvent(handler) {
    this._searchBTn.addEventListener(
      'click',
      this._addHandler.bind(this, handler)
    );
  }
  _addHandler(handler) {
    handler(this._city.value);
    this._city.value = '';
  }
  _clear() {
    this._parentEl.innerHTML = '';
  }
  _renderError(message) {
    const markup = `
      <div class="error">
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
export default new WeatherView();
