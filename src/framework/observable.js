/**
 * Class implementing the Observer pattern.
 */
export default class Observable {
  /** @type {Set<observerCallback>} Set of observer functions */
  #observers = new Set();

  /**
   * Method to subscribe to an event
   * @param {observerCallback} observer Function to be called when the event occurs
   */
  addObserver(observer) {
    this.#observers.add(observer);
  }

  /**
   * Method to unsubscribe from an event
   * @param {observerCallback} observer Function that should no longer be called when the event occurs
   */
  removeObserver(observer) {
    this.#observers.delete(observer);
  }

  /**
   * Method to notify subscribers of an event
   * @param {*} event Type of event
   * @param {*} [payload] Additional information
   */
  _notify(event, payload) {
    this.#observers.forEach((observer) => observer(event, payload));
  }
}

/**
 * Function to be called when an event occurs
 * @callback observerCallback
 * @param {*} event Type of event
 * @param {*} [payload] Additional information
 */
