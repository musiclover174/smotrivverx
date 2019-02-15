export default class Contacts {
  constructor(mapEl) {
    this.mapEl = mapEl;
    this.init();
  }

  init() {
    let map = null;
    let myIcon = null;

    DG.then(() => {
      map = DG.map(this.mapEl, {
        center: [55.1394, 61.37938],
        zoom: 16,
        fullscreenControl: false,
      });

      myIcon = DG.icon({
        iconUrl: '/static/i/pin.png',
        iconSize: [44, 56],
      });

      DG.marker([55.1394, 61.37938], {
        icon: myIcon,
      }).addTo(map);
    });
  }
}
