export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  // ? Как написать unsubscribe?

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    event.forEach((callback) => {
      callback(data);
    });
  }
}
