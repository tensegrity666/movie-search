export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    return (() => {
      this.events[eventName] = this.events[eventName]
        .filter((subscribedCallback) => callback !== subscribedCallback);
    });
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    event.forEach((callback) => {
      callback(data);
    });
  }
}
