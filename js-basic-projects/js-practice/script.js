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

var kisiArttir = document
  .getElementById("kisiArttir")
  .addEventListener("click", function () {
    var sayi = document.getElementById("sayi").innerHTML;
    sayi = parseInt(sayi);
    sayi = sayi + 1;
    document.getElementById("sayi").innerHTML = sayi;
    if (sayi == 15) {
    }
    var toplamKisi = (document.getElementById("toplamKisi").innerHTML =
      "Gunluk Toplam Musteri: " + sayi);
  });
var kisiAzalt = document
  .getElementById("kisiAzalt")
  .addEventListener("click", function () {
    var sayi = document.getElementById("sayi").innerHTML;
    sayi = parseInt(sayi);
    sayi = sayi - 1;
    document.getElementById("sayi").innerHTML = sayi;
  });

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Add new task
const newTask = document.querySelector("input");
const addTask = document.querySelector(".add-task");

addTask.addEventListener("click", function (e) {
  var li = "<li>" + newTask.value + "</li>";
  document.querySelector("ul").insertAdjacentHTML("beforeend", li);
});

// Draw on task item
const liElement = document.querySelectorAll("li");
for (let i = 0; i < liElement.length; i++) {
  liElement[i].addEventListener("click", function () {
    this.style.textDecoration = "line-through";
  });
}

// Delete all task items
const deleteAll = document.querySelector(".delete-all");
const ulElemet = document.querySelector("ul");
deleteAll.addEventListener("click", function () {
  if (confirm("Hepsini silmek istiyormusunuz?")) {
    ulElemet.innerHTML = "";
  }
});


var sunucudanDonen;

var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen = JSON.parse(baglanti.responseText);
        getQuestion();
    }
    return sunucudanDonen;
};
baglanti.open("GET", "data.json", true);
baglanti.send();

const answerContainer = document.getElementsByClassName("question-container")[0];
const question = document.getElementById('question');
const options = document.getElementsByName('option');

const opContentA = document.getElementById('opContentA');
const opContentB = document.getElementById('opContentB');
const opContentC = document.getElementById('opContentC');
const opContentD = document.getElementById('opContentD');

const submitBtn = document.getElementById('submit');

let puan = 0;
let sira = 0;

function getQuestion(){
    clearOption();
    console.log(sunucudanDonen);

    let nextQuestion = sunucudanDonen.questions[sira];
    question.innerHTML = nextQuestion.question;
    opContentA.innerText = nextQuestion.optionA;
    opContentB.innerText = nextQuestion.optionB;
    opContentC.innerText = nextQuestion.optionC;
    opContentD.innerText = nextQuestion.optionD;
}
function clearOption(){
    options.forEach(option => option.checked = false);
}
function getOption(){
    let secim;
    options.forEach(option => {
        if(option.checked == true){
            secim = option.id;
        }
    })
    return secim;
}
submitBtn.addEventListener('click', () =>{
    const secilen = getOption();
    console.log(secilen);

    if(secilen){
        if(secilen === sunucudanDonen.questions[sira].answer){
            puan++;
        }
    }
    sira++;
    if(sira < sunucudanDonen.questions.length){
        getQuestion();
    }
    else{
        answerContainer.innerHTML = `<h2>Your score: ${puan}/${sunucudanDonen.questions.length}</h2>`
        submitBtn.setAttribute('onclick',"location.reload()");
    }
})

window.onload = function () {
  var selectedOperator = "";
  var leftPart = "";
  var rightPart = "";
  var numbers = document.querySelectorAll(".num");
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener(
      "click",
      function () {
        document.getElementById("resultInner").innerHTML += this.value;
        if (selectedOperator == "") {
          leftPart += this.value;
        } else if (selectedOperator != "") {
          rightPart += this.value;
        }
      },
      false
    );
  }

  var operators = document.querySelectorAll(".operator");
  for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener(
      "click",
      function () {
        document.getElementById("resultInner").innerHTML += this.value;
        selectedOperator = this.value;
      },
      false
    );
  }

  document.getElementById("equation").addEventListener(
    "click",
    function () {
      if (selectedOperator == "+") {
        document.getElementById("resultInner").innerHTML =
          parseInt(leftPart) + parseInt(rightPart);
      } else if (selectedOperator == "-") {
        document.getElementById("resultInner").innerHTML =
          parseInt(leftPart) - parseInt(rightPart);
      } else if (selectedOperator == "*") {
        document.getElementById("resultInner").innerHTML =
          parseInt(leftPart) * parseInt(rightPart);
      } else if (selectedOperator == "/") {
        document.getElementById("resultInner").innerHTML =
          parseInt(leftPart) / parseInt(rightPart);
      }
    },
    false
  );
  document.getElementById("delete").addEventListener(
    "click",
    function () {
      selectedOperator = "";
      leftPart = "";
      rightPart = "";
      document.getElementById("resultInner").innerHTML = "";
    },
    false
  );
};



var btn = document.querySelector("button");
var isRed = false;

btn.addEventListener("click", function () {
    document.body.classList.toggle('red');
});


var elements = document.querySelectorAll('li');

for(var i=0;i<elements.length;i++){
    elements[i].addEventListener('mouseover',function(){
        this.style.color='red';
    })
    elements[i].addEventListener('mouseout',function(){
        this.style.color='black';
    })
    elements[i].addEventListener('click',function(){
        this.classList.toggle("benimClass");
    })
}

elements.addEventListener('mouseover',function(){
    this.style.color = 'red';
})
elements.addEventListener('mouseout',function(){
    this.style.color = 'black';
})


document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

var tag = document.getElementById("hightlight");
tag.style.color = "blue";




var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}
var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}var test = document.querySelector("button");
var baslik = document.getElementById("ilkBaslik");
test.addEventListener("click",function(){
  baslik.style.color ="red";
})
var elements = document.querySelectorAll('ul li');
for(var i=0;i<elements.length; i++){
  elements[i].addEventListener('click',function(){
    this.style.color = 'red';
  });
}