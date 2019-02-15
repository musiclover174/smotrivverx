import { qs } from './helpers';

export default class Contacts {
  constructor(mapEl) {
    this.mapEl = mapEl;
    this.iconUrl = qs(`#${mapEl}`).getAttribute('data-pin');
    this.coords = qs(`#${mapEl}`).getAttribute('data-coords').split(', ');
    this.init();
  }

  init() {
    let map = null;
    let myIcon = null;

    DG.then(() => {
      map = DG.map(this.mapEl, {
        center: this.coords,
        zoom: 16,
        fullscreenControl: false,
      });

      myIcon = DG.icon({
        iconUrl: this.iconUrl,
        iconSize: [44, 56],
      });

      DG.marker(this.coords, {
        icon: myIcon,
      }).addTo(map);
    });
  }
}
