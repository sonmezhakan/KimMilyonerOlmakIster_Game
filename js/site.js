window.onload = function () {
  kacinciSoru = 0;
};

var sorular = [
  {
    soruSayisi: 1,
    Soru: '"İki elimi kesseler ve kalemi dişlerimle tutmak zorunda kalsam da, yine müzik bestelemeye devam edeceğim" sözünün sahibi besteci kimdir?',
    a: "Frederic Chopin",
    b: "Dmitri Şostakoviç",
    c: "Sting",
    d: "Serdar Ortaç",
    dogruCevap: "b",
  },
  {
    soruSayisi: 2,
    Soru: "Trafikte önündeki aracın sağından ilerleyerek önüne geçen bir araç sözlük tanımına göre hangisini yapmış olur?",
    a: "Sollamak",
    b: "Sağlamak",
    c: "Soldan sağlamak",
    d: "Sağdan sollamak",
    dogruCevap: "b",
  },
  {
    soruSayisi: 3,
    Soru: "7 kez maruz kaldığı yıldırım çarpması sonucunda vücudunda büyük yaralar ve yanıklar oluşsa da sağ kurtulmayı başararak Guinness Dünya Rekorlarına giren Roy Sullivan, 71 yaşında nasıl ölmüştür?",
    a: "Kablo değiştirirken elektriğe çarpılarak",
    b: "Eşiyle sorunlar yaşayıp intihar ederek",
    c: '"Titanik" filmini izlerken kalp krizi geçirerek',
    d: "Bozayıdan kaçarken uçurumdan atlayarak",
    dogruCevap: "b",
  },
  {
    soruSayisi: 4,
    Soru: '"Ayrılık oto ve eğrelti otu yenmez ama çörek otu, semizotu ve dereotu yenir." cümlesinde TDK nin günümüzde geçerli olan Türkçe yazım kurallarına göre kaç tane yazım yanlışı vardır?',
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    dogruCevap: "a",
  },
  {
    soruSayisi: 5,
    Soru: 'ABD Dışişleri Bakanlığının yurt dışına çıkacak ABD vatandaşları için hazırladığı "seyahat uyarıları" na göre, şu anda hangi şıktaki ülkelere gitmek diğer şıklardakilere gitmekten daha güvenli?',
    a: "Belçika, Hollanda, İspanya",
    b: "Almanya, Fransa, İtalya",
    c: "Romanya, Ruanda, Vietnam",
    d: "Birleşik Krallık, Danimarka, İsveç",
    dogruCevap: "c",
  },
  {
    soruSayisi: 6,
    Soru: "1959'dan günümüze devam eden Süper Lig tarihinde 1968-1980 arasında hangi futbol takımı hiç şampiyon olmamıştır?",
    a: "Beşiktaş",
    b: "Galatasaray",
    c: "Trabzonspor",
    d: "Fenerbahçe",
    dogruCevap: "a",
  },
];

const soru = document.getElementById("soru");
const aSıkkı = document.getElementById("a");
const bSıkkı = document.getElementById("b");
const cSıkkı = document.getElementById("c");
const dSıkkı = document.getElementById("d");
const baslat = document.getElementById("baslat");

var kacinciSoru = 0;
var cevap = true;
var timerActive = false;
var countDown;
const tableRow1 = document.getElementById("tableRow1");
const tableRow2 = document.getElementById("tableRow2");
const tableRow3 = document.getElementById("tableRow3");
const tableRow4 = document.getElementById("tableRow4");
const tableRow5 = document.getElementById("tableRow5");
const tableRow6 = document.getElementById("tableRow6");

function TableColorClear() {
  tableRow1.style.backgroundColor = "rgb(0, 0, 87)";
  tableRow2.style.backgroundColor = "rgb(0, 0, 87)";
  tableRow3.style.backgroundColor = "rgb(0, 0, 87)";
  tableRow4.style.backgroundColor = "rgb(0, 0, 87)";
  tableRow5.style.backgroundColor = "rgb(0, 0, 87)";
  tableRow6.style.backgroundColor = "rgb(0, 0, 87)";
}

function GetTimer() {
  let second = 30;
  let sureBackground = document.getElementById("sureBackground");
  let sure = document.getElementById("sure");
  countDown = setInterval(function () {
    if (!timerActive) {
      second--;
      sure.innerText = second;
      if (second <= 0) {
        second = 30;
        clearInterval(countDown);
        cevap = true;
        timerActive = true;
        kacinciSoru = 0;
        TableColorClear();
        sureBackground.style.backgroundColor = "white";
        sure.style.color = "black";
        BaslatButton("Başlat");
      } else if (second <= 10) {
        sureBackground.style.backgroundColor = "red";
        sure.style.color = "white";
      } else {
        sureBackground.style.backgroundColor = "white";
        sure.style.color = "black";
      }
    }
  }, 1000);
}

function TableColor() {
  if (kacinciSoru == 0) {
    tableRow1.style.backgroundColor = "green";
  } else if (kacinciSoru == 1) {
    tableRow2.style.backgroundColor = "green";
  } else if (kacinciSoru == 2) {
    tableRow3.style.backgroundColor = "green";
  } else if (kacinciSoru == 3) {
    tableRow4.style.backgroundColor = "green";
  } else if (kacinciSoru == 4) {
    tableRow5.style.backgroundColor = "green";
  } else if (kacinciSoru == 5) {
    tableRow6.style.backgroundColor = "green";
  }
}

function BaslatButton(deger) {
  baslat.innerText = deger;
}

function SoruGoster() {
  timerActive = false;
  if (kacinciSoru >= 6) {
    kacinciSoru = 0;
    TableColorClear();
    BaslatButton("Baslat");
    SoruGoster();
  } else {
    clearInterval(countDown);
    cevap = false;
    aSıkkı.style.backgroundColor = "rgb(0, 0, 87)";
    bSıkkı.style.backgroundColor = "rgb(0, 0, 87)";
    cSıkkı.style.backgroundColor = "rgb(0, 0, 87)";
    dSıkkı.style.backgroundColor = "rgb(0, 0, 87)";

    soru.innerText = kacinciSoru + 1 + " - " + sorular[kacinciSoru].Soru;
    aSıkkı.innerText = "A - " + sorular[kacinciSoru].a;
    bSıkkı.innerText = "B - " + sorular[kacinciSoru].b;
    cSıkkı.innerText = "C - " + sorular[kacinciSoru].c;
    dSıkkı.innerText = "D - " + sorular[kacinciSoru].d;

    cevap = false;
    TableColorClear();
    TableColor();
    GetTimer();
    BaslatButton("Sonraki Soru");
  }
}

function CevapValidate(hangiSık) {
  if (!cevap) {
    if (hangiSık == sorular[kacinciSoru].dogruCevap) {
      CevapRenk(hangiSık, "green");
      kacinciSoru++;
      cevap = true;
      timerActive = true;
    } else {
      cevap = true;
      CevapRenk(hangiSık, "orange");
      CevapRenk(sorular[kacinciSoru].dogruCevap, "green");
      kacinciSoru = 0;
      timerActive = true;
      BaslatButton("Başlat");
    }
  }
}

function CevapRenk(hangiSık, renk) {
  document.getElementById(hangiSık).style.backgroundColor = renk;
}
