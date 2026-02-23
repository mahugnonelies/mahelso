const cards = document.querySelectorAll(".app-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
