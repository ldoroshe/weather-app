import ElementsList from "../../data/elements-list/elements-list";
import "../../../styles/dot-chart.css";

/**
 * Extends the ElementsList class to chart component
 * Provides additional functionalities for creating and updating chart
 */
export default class DotChart extends ElementsList {
  /**
   * Constructs the DotChart with a host element and limit of dots.
   * @param {HTMLElement} parentElement
   * @param {number} limit
   */
  constructor(parentElement, limit) {
    super(limit);

    this.initialValue = null;

    this.createChartBox();

    parentElement.append(this.chart);
  }

  /**
   * Helper for calculation height of dot holding container.
   * @param {number} temperature
   * @returns {string}
   */
  calcPointHolderHeight(temperature) {
    if (this.initialValue === null) {
      this.initialValue = Math.round(temperature);
    }
    return `${(temperature / this.initialValue) * 50}%`;
  }

  /**
   * Creates container for chart.
   * @returns {HTMLDivElement}
   */
  createChartBox() {
    this.chart = document.createElement("div");
    this.chart.id = "dot-chart";
    return this.chart;
  }

  /**
   * Creates chart element - div displaying a dot.
   * @param {import("../../types").WeatherAppDataPoint} point
   * @returns {HTMLDivElement}
   */
  createPoint(point) {
    const pointHolder = document.createElement("div");
    if (point && typeof point.temperature !== "undefined") {
      const temperature = Number(point.temperature);
      pointHolder.style.height = this.calcPointHolderHeight(temperature);
      pointHolder.dataset.title = point.temperature + "\n" + point.date;
    } else {
      pointHolder.classList.add("empty");
    }
    return pointHolder;
  }

  /**
   * Removing chart element.
   */
  removedItemAction() {
    this.chart.removeChild(this.chart.children[0]);
  }

  /**
   * Creating new chart element and adding it to the chart box.
   * @param {import("../../types").WeatherAppDataPoint} item
   */
  addedItemAction(item) {
    const point = this.createPoint(item);
    this.chart.appendChild(point);
  }
}
