/**
 
karsilastirma operatorleri :   <  >  <= >= == === 
mantiksal operatorler :  ||  && != 
kontrol yapilari :  if else if  else
donguler : while, for , do while
fonksiyonlar
diziler arrays
nesneler - objects
this keyword
 */

function karsilastirma(sayi1, sayi2) {
  if (sayi1 > sayi2) {
    alert(sayi1 + " buyuktur " + sayi2 + "`den");
  } else if (sayi1 < sayi2) {
    alert(sayi1 + " kucuktur " + sayi2 + "`den");
  }
}
karsilastirma(12, 10);

var renkler = ["kirmizi", "mavi", "beyaz"];

for (var i = 0; i < renkler.length; i++) {
  console.log(renkler[i]);
}

var models = ["mercedes", "bmw", "audi", "ford"];
models.forEach(function (model) {
  console.log(model);
});

var kisi1 = ["Zaur Sharifov", "21", "Mugla Sitki Kocman"];

var kisi2 = {
  isim: "Zaur",
  soyadi: "Sharifov",
  yas: 21,
  universitesi: "Mugla Sitki Kocman",
};
console.log(kisi2.soyadi);

var sehirler = ["Mersin", "Adana", "Istanbul", "Mugla"];
sehirler.push("Ankara");
var sehir = {
  ismi: "Istanbul",
  ulke: "Turkiye",
};
sehir.tarihi = 2000; // tarih ekledi

var paylasimlar = [
  {
    baslik: "Yazilim",
    yazar: "Zaur",
    yorumlar: ["Yazilim Hayattir", "Yazilimi seviyorum"],
  },
  {
    baslik: "Kisisel Gelisim",
    yazar: "Zeo",
    yorumlar: ["Donanim Hayattir", "Donanimi seviyorum"],
  },
];

var filmler = [
  {
    adi: "Kilibik",
    puani: 5,
    izlenme: false,
  },
  {
    adi: "Hababam Sinifi",
    puani: 5,
    izlenme: true,
  },
];

filmler.forEach(function (film) {
  if (film.izlenme) {
    console.log(
      "Filmin adi: " + film.adi + "ve izlendi. Puani ise " + film.puani
    );
  } else {
    console.log(
      "Filmin adi: " + film.adi + "ve izlenmedi. Puani ise " + film.puani
    );
  }
  console.log(film.adi);
});

var person = {
  name: "zaur",
  age: 21,
  department: "IT",
  friends: ["Abbas", "Aziz"],
  toplama: function (x, y) {
    return x + y;
  },
};

person.toplama(10, 15);

var yazilimDilleri = {};
yazilimDilleri.data = ["Java", "C#", "C", "Python"];

function yazdir(arr) {
  arr.forEach(function (madde) {
    console.log(madde);
  });
}

yazdir(yazilimDilleri.data);

// global this -- window
var kisi = "zaur";
this.kisi;

function ornek() {
  var data = "Data";
}
("use strict");
function ornek2() {
  this.data2 = "data2";
}

function nedirbuthis() {
  return this;
  // windowa baglidir
}

var kisi = {
  isim: "zaur",
  selamlasma: function () {
    return "Sa" + this.isim;
  },
};
kisi.selamlasma();

var KarmasikNesne = {
  soyad: "sharifov",
  selamlasma: function () {
    return "merhabalar " + this.soyad;
  },
  testEt: function () {
    return this === KarmasikNesne;
  },
  basitNesne: {
    Selamlasma: function () {
      return "merhabalar " + this.soyad;
    },
    testEt: function () {
      return this === KarmasikNesne; // en yakin basitNesneye bagli ama onun icinde soyad olmadigi icin undefined der
    },
  },
};

KarmasikNesne.selamlasma();
KarmasikNesne.basitNesne.Selamlasma(); // merhabalar undifined
KarmasikNesne.basitNesne.Selamlasma.call(KarmasikNesne);

var insan1 = {
  adi: "zeo",
  adiniSoyle: function () {
    return "Adim " + this.adi;
  },
};

var insan2 = {
  adi: "elon",
  adiniSoyle: function () {
    return "Adim " + this.adi;
  },
};

var insan3 = {
  isim: "leyla",
  selamlasma: function () {
    return "sa ben " + this.isim;
  },
};
var insan4 = {
  isim: "steel",
};

insan1.adiniSoyle();
insan2.adiniSoyle();

insan3.selamlasma();
insan3.selamlasma.call(insan4);

function selamVer() {
  return "sa be " + this.isim;
}
var zaur = {
  isim: "zaur",
};
var ece = {
  isim: "ece",
};
selamVer.call(zaur);
selamVer.call(ece);

function toplamaYap(a, b, c) {
  return `${this.isim} toplama islemini yapti ve sonuc ${a + b + c}`;
}

toplamaYap.apply(zaur, [1, 2, 3]);

function toplama(a, b, c) {
  return this.isim + " hesaplama yapti ve sonuc: " + (a + b + c);
}
var zaur = {
  isim: "zeo",
};
var elon = {
  isim: "elon",
};

var test = toplama.bind(zaur, 1, 2);

function outer() {
  var degisken = "Closure learning";
  return function inner() {
    return degisken + " is easy";
  };
} // closure var disdaki fonksiyondaki degiskeni icerdeki fonksiyonda kullaniyor

function test() {
  var test = "bu bir test denemesidir";
  return function testIceri() {
    return "bu da bir ornek";
  };
} // closure yok!

function toplama(a) {
  return function (b) {
    return a + b;
  };
}

toplama(5)(8);

var nesne1 = toplama(10);

function sayac() {
  var sayi = 0;
  return function iceri() {
    sayi++;
    return sayi;
  };
}

function ProgramlamaDilleri() {
  var diller = ["js", "java"];
  return {
    getDiller: function () {
      return diller;
      // return diller.slice  - arrayin kopyasini gonderir silersen bile kopyadan siler asli kalir
    },
    addDil: function (dil) {
      diller.push(dil);
      return diller;
    },
  };
}

var ilkTest = ProgramlamaDilleri();

ilkTest.getDiller();
ilkTest.addDil("c#");

var ikinciTest = ProgramlamaDilleri();
ikinciTest.getDiller();
ikinciTest.addDil("python");

ilkTest.getDiller().pop();

var ilk = ProgramlamaDilleri();
ilk.getDiller().pop();
