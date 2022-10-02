let gunler = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let isim = document.querySelector('#myName');
isim.innerHTML = prompt("isim giriniz","buraya yaziniz");
let clock = document.querySelector('#myClock');


function test() {
    
    let zaman = new Date();
    let gun = gunler[zaman.getDay()];
    let saat = zaman.getHours();
    let dakika = zaman.getMinutes();
    let saniye = zaman.getSeconds();
    
    clock.innerHTML = `${saat}: ${dakika}: ${saniye}  ${gun}`
    


    }
    setInterval(test, 1000);




