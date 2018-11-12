let retter;
async function hentJson() {
    //hent json
    let jsonData = await fetch("json/menu.json");
    retter = await jsonData.json();
    //console.log(retter);
    visRetter(retter);


}

function visRetter(retter) {
    let menuTemplate = document.querySelector("[data-template]");
    let templateModtager = document.querySelector("[data-container]");
    templateModtager.innerHTML = "";
    //for hver ret vis dem i DOM
    retter.forEach(hverRet => {
        //klon template og indsæt ret properties
        let klon = menuTemplate.cloneNode(true).content;
        klon.querySelector("[data-navn]").textContent = hverRet.navn;
        klon.querySelector("[data-kortbeskrivelse]").textContent = hverRet.kortbeskrivelse;
        klon.querySelector("[data-pris]").textContent = hverRet.pris;
        klon.querySelector("[data-billede]").setAttribute("src", "imgs/small/" + hverRet.billede + "-sm.jpg")
        templateModtager.appendChild(klon);

    });
}

document.addEventListener("DOMContentLoaded", hentJson);
