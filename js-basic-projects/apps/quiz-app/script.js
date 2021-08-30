var sunucudanDonen;

var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen = JSON.parse(baglanti.responseText);
        console.log(sunucudanDonen);
    }
};
baglanti.open("GET", "data.json", true);
baglanti.send();