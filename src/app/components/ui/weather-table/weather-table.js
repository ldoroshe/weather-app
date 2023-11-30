import "../../../styles/weather-table.css";
import { WeatherAppDataPoint } from "../../types";
import WeatherUIComponent from "../weather-ui-component/weather-ui-component";

/**
 * Extends the ElementsList class to manage table component.
 * Provides additional functionalities for creating and updating table.
 */
export default class WeatherTable extends WeatherUIComponent {
  /**
   * Constructs the WeatherTable with a host element, limit of rows,
   * and column headers.
   * @param {HTMLElement} parentElement
   * @param {number} limit
   * @param {import("../../types").WeatherAppDataPoint} header
   * @param {boolean} [recentOnTop=true] direction of table
   */
  constructor(parentElement, limit, header, recentOnTop = true) {
    super(parentElement, limit);
    this.recentOnTop = recentOnTop;
    this.colNames = Object.keys(WeatherAppDataPoint);

    if (header) {
      const headerRow = this.createRow(header, true);
      this.thead.append(headerRow);
    }
  }

  /**
   * Creates structure of DOM elements for table.
   * @returns {HTMLElement[]}
   */
  createElement() {
    this.table = document.createElement("table");
    this.thead = document.createElement("thead");
    this.tbody = document.createElement("tbody");
    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);
    return [this.table, this.tbody];
  }

  /**
   * Creates structure of DOM elements for table row,
   * populated with provided data.
   * @param {import("../../types").WeatherAppDataPoint} rowData
   * @param {boolean} isHeader
   * @returns {HTMLTableRowElement}
   */
  createRow(rowData, isHeader = false) {
    const row = document.createElement("tr");
    const elementName = isHeader ? "th" : "td";
    const cells = [];
    for (const item of this.colNames) {
      const cell = document.createElement(elementName);
      cell.append(rowData[item]);
      cells.push(cell);
    }
    row.append(...cells);
    return row;
  }

  /**
   * On removal of item remove first (or last depending on
   * direction of table) row from the table (as on exceeding
   * of limit we remove first item from internal store).
   */
  remove() {
    const toRemove = this.recentOnTop
      ? this.wrapperElement.lastChild
      : this.wrapperElement.firstChild;
    this.wrapperElement.removeChild(toRemove);
  }

  /**
   * On adding new element creating new row and adding it
   * to the table.
   * @param {import("../../types").WeatherAppDataPoint} item
   */
  add(item) {
    const row = this.createRow(item);
    const action = this.recentOnTop ? "prepend" : "append";
    this.wrapperElement[action](row);
  }
}
