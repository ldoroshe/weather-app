import { reportError } from "./error";
import { reportLog } from "./log";

/**
 * @class Logger
 * Logging and reporting
 */
export default class Logger {
  static error = reportError;
  static log = reportLog;
}
