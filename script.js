let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.667, lng: 135.4302 },
    zoom: 18,
    mapId: '8297c4f375794b97'
  });

  const marker = new google.maps.Marker({
    position: {lat: 34.66753477285583, lng: 135.43038894258004},
    map,
    title: "Pikachiu",
    icon: {
      url: "102253_preview.webp",
      scaledSize: google.maps.Size(38,31)
    },
    animation: google.maps.Animation.DROP
  });

  const infowindow = new google.maps.infowindow({
    content: "Pikachiu",
  });

  marker.addListener("click", () => {
    infowindow.open(map,marker);
  });
}




window.initMap = initMap;