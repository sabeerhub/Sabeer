const nameElement = document.getElementById('name');
const words = ["Mustapha Abdulsalam", "Frontend Dev", "Web3 Enthusiast", "AI Specialist", "Crypto Trader", "Graphics Designer","Ethical Hacker"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (!deleting) {
    nameElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    nameElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 100 : 150);
}
type();