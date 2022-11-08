import { refs } from './js/refs';
console.log(refs);

const onSeaClick = event => {
  event.layerX;
  event.layerY;

  if (event.currentTarget !== event.target) {
    return;
  }
  if (event.layerX < refs.ship.clientWidth) {
    // refs.ship.style.top = `${event.layerY - refs.ship.clientHeight / 2}px`;
    refs.ship.style.left = `${event.layerX}px`;
  } else {
    refs.ship.style.left = `${event.layerX - refs.ship.clientWidth}px`;
  }
  if (event.layerY < refs.ship.clientHeight) {
    refs.ship.style.top = `${event.layerY}px`;
    // refs.ship.style.left = `${event.layerX - refs.ship.clientWidth / 2}px`;
  } else {
    refs.ship.style.top = `${event.layerY - refs.ship.clientHeight}px`;
  }
  // console.log("Coordinate x:", event.layerX);
  // console.log("Coordinate y:", event.layerY);
};

refs.sea.addEventListener('click', onSeaClick);
