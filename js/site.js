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

const tableRows =[
  {row:document.getElementById("tableRow1")},
  {row:document.getElementById("tableRow2")},
  {row:document.getElementById("tableRow3")},
  {row:document.getElementById("tableRow4")},
  {row:document.getElementById("tableRow5")},
  {row:document.getElementById("tableRow6")}
]

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
        
        ObjectBackgroundColor(sureBackground,"white");
        ObjectColor(sure,"black");
        BaslatButton("Başlat");
      } else if (second <= 10) {
        ObjectBackgroundColor(sureBackground,"red");
        ObjectColor(sure,"white");
      } else {
        ObjectBackgroundColor(sureBackground,"white");
        ObjectColor(sure,"black");
      }
    }
  }, 1000);
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
    ObjectBackgroundColor(aSıkkı,"rgb(0, 0, 87)");
    ObjectBackgroundColor(bSıkkı,"rgb(0, 0, 87)");
    ObjectBackgroundColor(cSıkkı,"rgb(0, 0, 87)");
    ObjectBackgroundColor(dSıkkı,"rgb(0, 0, 87)");
    

    soru.innerText = kacinciSoru + 1 + " - " + sorular[kacinciSoru].Soru;
    aSıkkı.innerText = "A - " + sorular[kacinciSoru].a;
    bSıkkı.innerText = "B - " + sorular[kacinciSoru].b;
    cSıkkı.innerText = "C - " + sorular[kacinciSoru].c;
    dSıkkı.innerText = "D - " + sorular[kacinciSoru].d;

    cevap = false;
    TableColorClear();
    ObjectBackgroundColor(tableRows[kacinciSoru].row,"green")
    GetTimer();
    BaslatButton("Sonraki Soru");
  }
}

function CevapValidate(hangiSık) {
  if (!cevap) {
    if (hangiSık == sorular[kacinciSoru].dogruCevap) {
      ObjectBackgroundColor(document.getElementById(hangiSık), "green")
      kacinciSoru++;
      cevap = true;
      timerActive = true;
    } else {
      cevap = true;
      ObjectBackgroundColor(document.getElementById(hangiSık), "orange")
      ObjectBackgroundColor(document.getElementById(sorular[kacinciSoru].dogruCevap), "green");
      kacinciSoru = 0;
      timerActive = true;
      BaslatButton("Başlat");
    }
  }
}

function  ObjectColor(object,color){
object.style.color = color;
}
function TableColorClear() {
  for (let index = 0; index < tableRows.length; index++) {
    ObjectBackgroundColor(tableRows[index].row,"rgb(0, 0, 87)")
  }
}
function ObjectBackgroundColor(object,color){
  object.style.backgroundColor = color;
}
function BaslatButton(deger) {
  baslat.innerText = deger;
}

