import { refs } from './js/refs';
console.log(refs);

// const onSeaClick = event => {
//   event.layerX;
//   event.layerY;

//   if (event.currentTarget !== event.target) {
//     return;
//   }
//   if (event.layerX < refs.ship.clientWidth) {
//     // refs.ship.style.top = `${event.layerY - refs.ship.clientHeight / 2}px`;
//     refs.ship.style.left = `${event.layerX}px`;
//   } else {
//     refs.ship.style.left = `${event.layerX - refs.ship.clientWidth}px`;
//   }
//   if (event.layerY < refs.ship.clientHeight) {
//     refs.ship.style.top = `${event.layerY}px`;
//     // refs.ship.style.left = `${event.layerX - refs.ship.clientWidth / 2}px`;
//   } else {
//     refs.ship.style.top = `${event.layerY - refs.ship.clientHeight}px`;
//   }
// };

refs.sea.addEventListener('click', onSeaClick);


function onSeaClick(e) {
  let seaCoord = refs.sea.getBoundingClientRect();
  let top = e.clientY - seaCoord.top - refs.sea.clientTop - refs.ship.clientHeight / 2;
  let left = e.clientX - seaCoord.left - refs.sea.clientLeft - refs.ship.clientWidth / 2;
  if (left + refs.ship.clientWidth > refs.sea.clientWidth) {
    left = refs.sea.clientWidth - refs.ship.clientWidth
  }
  if (top + refs.ship.clientHeight > refs.sea.clientHeight) {
    top = refs.sea.clientHeight - refs.ship.clientHeight
  }
  if (top < 0) {
    top = 0;
  }
  if (left < 0) {
    left = 0;
  }
  console.log('top', top);
  console.log('left', left);
  refs.ship.style.top = `${top}px`;
  refs.ship.style.left = `${left}px`;
  
} 