let events;

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
     //hent json
     let jsonData = await fetch("javas/events.json");
     events = await jsonData.json();
     //console.log(retter);
     visEvents(events, "events");
     lavFiltre();
}

function visEvents(events, overskrift) {

     let menuTemplate = document.querySelector("[data-template]");
     let templateModtager = document.querySelector("[data-container]");
     templateModtager.innerHTML = "";
     document.querySelector("#overskrift").textContent = overskrift;


     events.forEach(hverRet => {

          let klon = menuTemplate.cloneNode(true).content;
          klon.querySelector("[data-navn]").textContent = hverEvent.navn;
          klon.querySelector("[data-kortbeskrivelse]").textContent = hverRet.kortbeskrivelse;
          klon.querySelector("[data-pris]").textContent = hverEvent.pris;
          klon.querySelector("[data-dato]").textContent = hverEvent.dato;
          klon.querySelector("[data-tid]").textContent = hverEvent.tid;
          klon.querySelector("[data-eventlink]").textContent = hverEvent.eventlink;
          klon.querySelector("[data-billede]").setAttribute("src", "imgs/small/" + hverEvent.billede + "-sm.jpg")
          templateModtager.appendChild(klon);

     });
}

function lavFiltre() {

     let film = retter.filter(event => event.kategori == "film");
     let hovedretter = retter.filter(ret => ret.kategori == "hovedretter");
     let desserter = retter.filter(ret => ret.kategori == "desserter");
     let drikkevare = retter.filter(ret => ret.kategori == "drikkevare");

     document.querySelector('#filter-alle').addEventListener("click", () => {
          visRetter(retter);

     });
}
document.querySelector('#forretter').addEventListener("click", () => {
     visRetter(forretter, "Forretter");
});

document.querySelector('#filter-hovedretter').addEventListener("click", () => {
     visRetter(hovedretter, "Hovedretter");
});

document.querySelector('#filter-desserter').addEventListener("click", () => {
     visRetter(desserter, "Desserter");
});

document.querySelector('#filter-drikkevare').addEventListener("click", () => {
     visRetter(drikkevare, "Drikkevare");
});

klon.querySelector(".data-ret").addEventListener("click", () => {
     visModal(visModal);
});

function visModal() {
     document.querySelector("#modal").classList.add("vis");
}


function visModal() {
     document.querySelector("#modal").classList.add("vis");

     klon.querySelector(".data-billede").addEventListener("click", () => {
          visModal(person);
     });

     function visModal(personen) {
          // . . . vis
          document.querySelector(".modal-navn").textContent = personen.navn;
          document.querySelector(".modal-billede").src = " " + personen.billede;
          document.querySelector(".modal-billede").alt = "Foto af" + personen.navn;
          // . . . skjul
     }

     document.querySelector("#modal button").addEventListener("click", skjulModal);
}

function skjulModal() {
     document.querySelector("#modal").classList.remove("vis");
}
