const btn = document.querySelector("#btnChange");

btn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>Changed</h1>";
});

let KEY = "";
let cards = [];

async function init() {
  const res = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const data = await res.json();
  KEY = data.deck_id;
  return KEY;
}

async function getCards(quantity = 2) {
  const res = await fetch(
    `https://deckofcardsapi.com/api/deck/${KEY}/draw/?count=${quantity}`
  );
  const data = await res.json();
  cards = [...cards, ...data.cards];
}

async function displayCards() {
  root.innerHTML = cards
    .map((card) => `<img src="${card.image}" alt="${card.code}">`)
    .join("");
}

async function play() {
  await init();
  await getCards();
  await displayCards();
}

getCard.addEventListener("click", async () => {
  await getCards(1);
  await displayCards();
});

play();
