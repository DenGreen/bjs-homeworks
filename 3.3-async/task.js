class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("error text");
    } else if (this.alarmCollection.find((values) => values.id === id)) {
      return console.error("Будильник с таким id уже существует");
    } else {
      this.alarmCollection.push({
        id: id,
        time: time,
        callback: callback,
      });
    }
  }

  removeClock(id) {
    let delId = alarmCollection.findIndex((values) => values.id === id);
    if (delId !== -1) {
      alarmCollection.splice(delId, 1);
      console.log(`Будильник с id ${id} удален`);
    } else {
      console.log("Будильник с таким id не найден");
    }
  }

   getCurrentFormattedTime() {
    let times = new Date();
    return (`${times.getHours()}:${times.getMinutes()}`);;
  }

  start() {
      function checkClock(bell) {
        if (bell.time === this.getCurrentFormattedTime()) {
            return bell.callback();
        }
      }
      setInterval(this.alarmCollection.forEach((item) => checkClock(item)), 1000);
    }
}
