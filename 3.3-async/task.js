class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
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
    let delId = this.alarmCollection.findIndex((values) => values.id === id);
    if (delId !== -1) {
      this.alarmCollection.splice(delId, 1);
      console.log(`Будильник с id ${id} удален`);
    } else {
      console.log("Будильник с таким id не найден");
    }
  }

   getCurrentFormattedTime() {
    let times = new Date();
    return (`${times.getHours()}:${times.getMinutes()}`);
  }

  start() {
      let checkClock = (bell) => {
        if (bell.time === this.getCurrentFormattedTime()) {
            return bell.callback();
        }
      }

      let enumerationArray = () => {
        this.alarmCollection.forEach((item) => checkClock(item));
      }
      this.timerId = setInterval(enumerationArray, 1000); 
    }

    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }

    printAlarms() {
      console.log(`Печать всех будильников в колличестве: ${this.alarmCollection.length}`);
      this.alarmCollection.forEach((item, i) => console.log(`Будильник №${i+1} заведен на ${item.time}`));
    }

    clearAlarms() {
      stop();
      this.alarmCollection = [];
    }
}

let testCase = () => {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock("17:57", () => console.log("Пора вставать"),1);
  phoneAlarm.addClock("17:53", () => console.log("Пора вставать"),1);
  phoneAlarm.addClock("17:58", () => {console.log("Давай вставай уже"); phoneAlarm.removeClock(2)},2);
  phoneAlarm.addClock("17:59", () => {console.log("Вставай а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()},3);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}