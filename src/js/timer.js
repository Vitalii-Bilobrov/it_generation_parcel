import Notiflix from 'notiflix';
class Timer {
  #selector;
  #targetDate;
  #datasetValues = {
    days: ['день', 'дні', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  };
  #refs = {};
  #timerId = null;
  constructor(selector, targetDate) {
    this.#selector = selector;
    this.#targetDate = new Date(targetDate);
    console.log(this.#targetDate);
  }
  start() {
    const today = new Date();
    if (this.#targetDate < today) {
      Notiflix.Notify.warning('Please select a new date!');
      return;
    }
    this.#getRefs();

    this.#timerId = setInterval(() => {
      const delta = this.#targetDate.getTime() - Date.now();
      if (delta <= 1000) {
        clearInterval(this.#timerId);
        const audio = document.querySelector('audio');
        if (audio) {
          audio.play();
        }
        Notiflix.Notify.success('Happy birthday!');
        return;
      }
      this.#updateValue(delta);
    }, 1000);
  }
  #getRefs() {
    this.#refs.items = document.querySelectorAll(
      `${this.#selector} .timer__box`
    );
    console.log(this.#refs);
  }
  #convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
  #addZero(n) {
    return n.toString().padStart(2, '0');
  }
  drawCircle(index, value) {
    const ctx = this.#refs.items[index].lastElementChild.getContext('2d');

    ctx.clearRect(0, 0, 200, 200);
    ctx.beginPath();
    ctx.strokeStyle = 'red';

    ctx.lineWidth = 4;
    // ctx.lineCap = 'round';
    let path = 60 / 2;
    if (index === 1) {
      path = 24 / 2;
    }

    ctx.arc(
      100,
      100,
      100 - 2,
      (Math.PI / path) * (value - path / 2),
      (Math.PI / path) * (path * 2 - path / 2 - 0.01),
      true
    );

    ctx.stroke();
  }
  #declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  #updateValue(delta) {
    const data = this.#convertMs(delta);
    Object.entries(data).forEach(([name, value], idx) => {
      this.#refs.items[idx].firstElementChild.textContent =
        this.#addZero(value);
      this.drawCircle(idx, value);
      this.#refs.items[idx].firstElementChild.dataset.title =
        this.#declensionNum(value, this.#datasetValues[name]);
    });
  }
}

const timer = new Timer('.timer', 'November 14, 2022 17:01:01');
timer.start();
