import Notiflix from 'notiflix';
class Timer {
  #selector;
  #targetDate;
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
        Notiflix.Notify.success('Happy birhsday!');
        return;
      }
      const data = this.#convertMs(delta);
      Object.entries(data).forEach(([name, value], idx) => {
        this.#refs.items[idx].textContent = this.#addZero(value);
      });
    }, 1000);
  }
  #getRefs() {
    this.#refs.items = document.querySelectorAll(
      `${this.#selector} span.value`
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
}

const timer = new Timer('.timer', 'December 02, 2022 14:25:00');
timer.start();
