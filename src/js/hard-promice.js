/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 * Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені), міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
 *
 * Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено
 */

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */

const frameworks = ['React', 'Vue', 'Angular'];

const getRandomDelay = () => Math.ceil(Math.random() * 2000);
const makePromise = framework => {
  return new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    setTimeout(() => {
      if (delay < 1500) {
        resolve({
          delay,
          framework,
        });
      } else {
        reject({
          delay,
          framework,
          error: 'Promise error',
        });
      }
    }, delay);
  });
};

const promises = frameworks.map(el => {
  return makePromise(el);
});
// console.log(promises);

/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms`
 * або результат помилки: `❌ ${error}! ${name} rejected in ${delay} ms`
 */
// Promise.race(promises)
//   .then(({ framework, delay }) => {
//     console.log(`✅ ${framework} won with ${delay} ms`);
//   })
//   .catch(({ framework, delay, error }) => {
//     console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
//   });
/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: `✅ ${Framework_name} fulfilled in ${delay} ms`
 * Або з якою затримкою зареджектився один із них: `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 */
/* Promise.all(promises)
  .then(data => {
    data.forEach(({ framework, delay }) => {
      console.log(`✅ ${framework} fulfilled in ${delay} ms`);
    });
  })
  .catch(({ framework, delay, error }) => {
    console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
  }); */
/*
 * За допомогою Promise.allSettled отримайте масив результатів.
 * Виведіть на екран інформацію, з яким результатом виконався проміс для кожного фреймфорка:
 * `✅ ${Framework_name} fulfilled in ${delay} ms`
 * `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 *


 * Приклад відповіді:
 * {status: "fulfilled", value: 99},
 * {status: "rejected", reason: Error: an error}
 */
Promise.allSettled(promises).then(data => {
  console.log(data);
  data.forEach(el => {
    if (el.status === `fulfilled`) {
      console.log(`✅ ${el.value.framework} fulfilled in ${el.value.delay} ms`);
    } else {
      console.log(
        `❌ ${el.reason.error}! ${el.reason.framework} rejected in ${el.reason.delay} ms`
      );
    }
  });
});
