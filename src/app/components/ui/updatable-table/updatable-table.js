import ElementsList from "../../data/elements-list/elements-list";
import "../../../styles/updatable-table.css";

/**
 * Extends the ElementsList class to manage table component.
 * Provides additional functionalities for creating and updating table.
 */
export class UpdatableTable extends ElementsList {
  /**
   * Constructs the UpdatableTable with a host element, limit of rows,
   * and column headers.
   * @param {HTMLElement} parentElement
   * @param {number} limit
   * @param {import("../../types").WeatherAppDataPoint} header
   * @param {boolean} [recentOnTop=true] direction of table
   */
  constructor(parentElement, limit, header, recentOnTop = true) {
    super(limit);
    this.recentOnTop = recentOnTop;

    this.createTableElement();
    if (header) {
      const headerRow = this.createRow(header, true);
      this.thead.append(headerRow);
    }

    parentElement.append(this.table);
  }

  /**
   * Creates structure of DOM elements for table
   * @returns {HTMLTableElement}
   */
  createTableElement() {
    this.table = document.createElement("table");
    this.thead = document.createElement("thead");
    this.tbody = document.createElement("tbody");
    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);
    return this.table;
  }

  /**
   * Creates structure of DOM elements for table row,
   * populated with provided data
   * @param {import("../../types").WeatherAppDataPoint} rowData
   * @param {boolean} isHeader
   * @returns {HTMLTableRowElement}
   */
  createRow(rowData, isHeader = false) {
    const row = document.createElement("tr");
    const elementName = isHeader ? "th" : "td";
    const cells = [];
    // @todo extract hardcoded field names
    for (const item of ["temperature", "date"]) {
      const cell = document.createElement(elementName);
      cell.append(rowData[item]);
      cells.push(cell);
    }
    row.append(...cells);
    return row;
  }

  /**
   * On removal of item remove first row from the table
   * (as on exceeding of limit we remove first item from
   * internal store)
   */
  removedItemAction() {
    const toRemove = this.recentOnTop
      ? this.tbody.lastChild
      : this.tbody.firstChild;
    this.tbody.removeChild(toRemove);
  }

  /**
   * On adding new element creating new row and adding it
   * to the table.
   * @param {import("../../types").WeatherAppDataPoint} item
   */
  addedItemAction(item) {
    const row = this.createRow(item);
    const action = this.recentOnTop ? "prepend" : "append";
    this.tbody[action](row);
  }
}
