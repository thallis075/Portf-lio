// Seleciona todos os cards de skill
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('skill-card--active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('skill-card--active');
  });
});
(function () {
  emailjs.init("SUA_PUBLIC_KEY");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "SEU_SERVICE_ID",
      "SEU_TEMPLATE_ID",
      this
    )
    .then(
      () => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      },
      (error) => {
        alert("Erro ao enviar mensagem. Tente novamente.");
        console.error(error);
      }
    );
});
