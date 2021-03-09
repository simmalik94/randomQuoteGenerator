function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}
const quotes = {
  quote: [
    `"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth."`,
    `"Everything you can imagine is real."`,
    `"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."`,
    `"Do one thing every day that scares you."`,
    `"It’s no use going back to yesterday, because I was a different person then."`,
    `"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."`,
    `"Do what you feel in your heart to be right – for you’ll be criticized anyway."`,
    `"Happiness is not something ready made. It comes from your own actions."`,
    `"Whatever you are, be a good one."`,
    `"The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances."`,
    `"If we have the attitude that it’s going to be a great day it usually is."`,
    `"You can either experience the pain of discipline or the pain of regret. The choice is yours."`,
    `"Impossible is just an opinion."`,
    `“Your passion is waiting for your courage to catch up.”`,
  ],
  author: [
    `- William W.Purkey`,
    `- Pablo Picasso`,
    `- Helen Keller`,
    `- Eleanor Roosevelt`,
    `- Lewis Carroll`,
    `- Socrates`,
    `- Eleanor Roosevelt`,
    `- Dalai Lama XIV`,
    `- Abraham Lincoln`,
    `- Unknown`,
    `- Catherine Pulsifier`,
    `- Unknown`,
    `- Paulo Coelho`,
    `- Isabelle Lafleche`,
  ],
};

const quote = document.querySelector(".quote");
const btn = document.getElementById("btn");
const author = document.querySelector(".author");

btn.addEventListener("click", function () {
  let [q, auth] = Object.values(quotes);
  let a = generateRandomNumber(q.length);
  quote.innerHTML = `${q[a]}`;
  author.innerHTML = `${auth[a]}`;
});
