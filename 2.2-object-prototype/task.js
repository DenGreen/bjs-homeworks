String.prototype.isPalindrome = function () {
  let str = this.replace(/[^А-Я0-9]/gi, "").toLowerCase();
  let removeStr = str.split("").reverse().join("");
  if (str === removeStr) {
    return true;
  } else {
    return false;
  }
};

function getAverageMark(marks) {
  let i = 0;
  let average = 0;
  if (marks.length > 0) {
    for (let mark of marks) {
      i++;
      average += mark;
    }
    let roundedAverage = Math.round(average / i);
    return roundedAverage;
  } else {
      return 0;
  }
  
}

function checkBirthday(birthday) {
    let now = new Date();
    birthday = new Date(birthday);
    let diff = now.getTime() - birthday.getTime();
    let age = diff / 31536000000;
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
