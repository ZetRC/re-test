function initMap() {
    //  location 
    const uluru = { lat: 32.80881103833472, lng: -96.81399569072752 };
    //  map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    //marker
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  