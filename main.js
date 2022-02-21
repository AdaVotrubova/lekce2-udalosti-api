// tady je místo pro náš program

console.log("ahoooj :-)");

/** let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");


let ctverecek = document.querySelector("div.zluty");
ctverecek.classList.add("ctverecek");
*/

let pocitadlo= document.querySelector("odstavec");
function zvetsi(){
    console.log("pocitame test");
    pocitadlo= pocitadlo +1;
}

let odstavec= document.querySelector("p")

function ztucni(){
    console.log("test ztucni");
    odstavec.style.fontWeight="bold";
}
 
function ztenci(){
    console.log("test ztenci")
    odstavec.style.fontWeight="normal";
}

function priKliknuti(){
    odstavec.classList.toggle("red");
}    

let audioFile = document.querySelector("#zvukovaStopa");
function startAudio(){
    audioFile.play()
}

function pauseAudio(){
    audioFile.pause()
}

function zvukovaStopa1(){
    audioFile.volume=0;
}

function zvukovaStopa2(){
    audioFile.volume=0.5;
}

function zvukovaStopa3(){
    audioFile.volume=1;
}

function backStart(){
    audioFile.currentTime=0;
}

/**  Úkol na lekci: Vytvoř odstavec s textem “V elipse spí lev.”, který bude mít nastaveno style="font-size: 16px;", 
 * a tlačítko s nápisem “červený po kliknutí”. Další požadavky na prvky stránky budou:
Úkol na lekci: Písmo v odstavci po najetí myši ztuční.
Domácí úkol 1: Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
Domácí úkol 2: přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
Domácí úkol 3: Dopracuj ovládání audio souboru
    pauznutí zvukové stopy
    nastavení zvuku na 0, 0.5 a 1
    vrácení se na začátek

*/