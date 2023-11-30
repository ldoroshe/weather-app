/**
 * Component for display of current temperature
 */
export default class CurrentTemperature {
  /**
   * Constructs instance of current temperature display component.
   * Creates wrapping elements and appends it to specified element.
   * @param {HTMLElement} parentElement
   */
  constructor(parentElement) {
    this.header = document.createElement("h1");
    this.temperaturePlaceholder = document.createElement("span");
    this.header.append("Current temperature is ", this.temperaturePlaceholder);
    parentElement.append(this.header);

    this.update = (data) => this._update(data);
  }

  /**
   * Private method for updating component with new value of current temperature
   * @param {import("../../types").WeatherAppDataPoint} weatherData
   */
  _update(weatherData) {
    const sign = weatherData.temperature > 0 ? "+" : "";
    this.temperaturePlaceholder.innerText = sign + weatherData.temperature;
  }
}
