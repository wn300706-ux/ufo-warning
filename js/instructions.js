console.log("Loaded");

document.querySelector(".Head").addEventListener("click", Hovedet);
document.querySelector(".Body").addEventListener("click", Overkroppen);
document.querySelector(".Leg").addEventListener("click", Ben);

function Hovedet() {
  console.log("UF0 HOVED");
  document.querySelector(".info-text h2").textContent = "Hovedet";
  document.querySelector(".placeholder").textContent =
    "UFO’s hoved er karakteriseret som en rumvæsen. Dog så har han altid et smil på læben, især når han ser mennesker. Ps deres smil er en tegn på at du er den næste offer. ";

  document.querySelector("#efficiency").textContent =
    "Styrke: Den kan se og opfange ting fra lang afstand. ";
  document.querySelector("#requirement").textContent =
    "Svaghed: UFO kan blive let forvirret af blindende lys. ";
  document.querySelector("#Hotspot1 path").style.fill = "White";
}

function Overkroppen() {
  console.log("UFO OVERKROPPEN");
  document.querySelector(".info-text h2").textContent = "Overkroppen";
  document.querySelector(".placeholder").textContent =
    "UFO er tit klædt ud som en almindelig person for at blande sig ind med menneskemængden.";

  document.querySelector("#efficiency").textContent =
    "Fakta: Uniformen som tjener skjuler rumvæsenets overkrop under tøjet. Armene er tynde, men er meget hurtig og fleksibel, hvilket gør den farlig, især i nær kontakt med den.   ";
  document.querySelector("#requirement").textContent =
    "Detaljer: Uniformen er en klassisk sort vest, som forklædening. Knapper og lommer samt design bruges som camouflage for at ligne et menneske. Bevægelse virker stiv og unaturlig. Ps rumvæsenets hud lyser grønt!  ";
  document.querySelector("#Hotspot1 path").style.fill = "White";
}

function Ben() {
  console.log("UFO BEN");
  document.querySelector(".info-text h2").textContent = "Ben";
  document.querySelector(".placeholder").textContent =
    "UFO har lange ben ligesom en giraf, hvor dens benkraft svarer nærmest til en kangourou.";

  document.querySelector("#efficiency").textContent =
    "Info: Benene anvendes til at bevæge sig frem og tilbage. Samtidig kan dens ben se mærkelige ud, når den bevæger sig.  ";
  document.querySelector("#requirement").textContent =
    "Advarsel: Vær forsigtig, deres ben har en farlig rækkevide.";
  document.querySelector("#Hotspot1 path").style.fill = "White";
}

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
