console.log("Loaded");

const form = document.querySelector("form");

const fornavnOutput = document.querySelector("#fornavn_output");
const efternavnOutput = document.querySelector("#efternavn_output");
const emailOutput = document.querySelector("#email_output");
const observationOutput = document.querySelector("#observation_output");
const tjenerOutput = document.querySelector("#tjener_output");
const politibetjentOutput = document.querySelector("#politibetjent_output");
const andetOutput = document.querySelector("#andet_output");
const haendelseOutput = document.querySelector("#haendelsesdato_output");
const tidForHaendelseOutput = document.querySelector(
  "#tid_for_haendelse_output"
);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const fornavn = formData.get("fornavn");
  const efternavn = formData.get("efternavn");
  const email = formData.get("email");
  const lokation = formData.get("lokation");
  const forklaedning = formData.get("forklaedning");
  const dato = formData.get("dato");
  const tid = formData.get("tid");

  fornavnOutput.textContent = fornavn;
  efternavnOutput.textContent = efternavn;
  emailOutput.textContent = email;
  observationOutput.textContent = lokation;
  if (forklaedning === "tjener") tjenerOutput.textContent = "✔️";
  if (forklaedning === "politibetjent") politibetjentOutput.textContent = "✔️";
  if (forklaedning === "andet") andetOutput.textContent = "✔️";
  haendelseOutput.textContent = dato;
  tidForHaendelseOutput.textContent = tid;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
