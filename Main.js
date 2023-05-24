const btn = document.getElementById("btn")
let message = document.getElementById("message")

const quotes = 
["“Impossible is just an opinion.” —Paulo Coelho",
"“Your passion is waiting for your courage to catch up.” —Isabelle Lafleche",
"“Everything you can imagine is real.”―Pablo Picasso",
"“Hold the vision, trust the process.” —Unknown",
"“Do one thing every day that scares you.” ―Eleanor Roosevelt",
"“It’s no use going back to yesterday, because I was a different person then.” ―Lewis Carroll",
"“Don’t be afraid to give up the good to go for the great.” —John D. Rockefeller",
"“Do what you feel in your heart to be right―for you’ll be criticized anyway.” ―Eleanor Roosevelt",
"“Happiness is not something ready made. It comes from your own actions.” ―Dalai Lama XIV",
"“Whatever you are, be a good one.” ―Abraham Lincoln",
"“One day or day one. You decide.” —Unknown",
"“If we have the attitude that it’s going to be a great day it usually is.” —Catherine Pulsifier",
"“You can either experience the pain of discipline or the pain of regret. The choice is yours.” —Unknown",
"MGA BOBO"
];

const newQuotes = () => {
	return Math.floor(Math.random() * quotes.length);
}

// addEventListener
btn.addEventListener("click", () => {
	let count = newQuotes();
	message.textContent = quotes[count];
});

