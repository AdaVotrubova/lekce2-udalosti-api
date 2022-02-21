// tady je místo pro náš program

console.log("ahoooj :-)");

/** let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");


let ctverecek = document.querySelector("div.zluty");
ctverecek.classList.add("ctverecek");
*/

let odstavec= document.querySelector("p")

function ztucni(){
    console.log("test ztucni");
    odstavec.style.fontWeight="bold";
}
 
function ztenci(){
    console.log("test ztenci")
    odstavec.style.fontWeight="normal";
}

function prikliknuti(){
    odstavec.classList.toggle("red");
   }

let pocitadlo= document.querySelector("odstavec")
function zvetsi(){
    pocitadlo++;
}

let audioFile = document.querySelector("#zvukovaStopa");
function startAudio(){
    audioFile.onplay()
}

function pauseAudio(){
    audioFile.pause()
}

function zvukovaStopa(){
    audioFile.volume=0; 0.5; 1;
}

function backStart(){
    audioFile.currentTime=0.5;
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
