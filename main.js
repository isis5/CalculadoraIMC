let form = document.querySelector("#formulario");

let resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Formúlario Enviado.");
});

function calculoIMC(event) {

  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  const imc = peso / (altura * altura);

  console.log(peso.value, altura.value, imc);

  resultado.innerHTML = `<p>O seu IMC é de ${imc.toFixed(2)}</p>`;

  resultado.classList.remove('erro-codigo');
  resultado.classList.remove('codigo-certo');
  resultado.classList.remove('sobrepeso');
  resultado.classList.remove('obesidade');

  if (!peso || altura > peso) {
    resultado.innerHTML = `<p>Valores inválidos.</p>`;
    resultado.classList.add('erro-codigo');
    return
  } else if (imc > 0 &&imc < 18.5) {
    resultado.innerHTML += `<p>Você está MUITO MAGRO para a sua altura, cuidado.</p>`;
    resultado.classList.add('obesidade');
  } else if (imc >= 18.5 && imc < 25) {
    resultado.innerHTML += `<p>Você está com o PESO NORMAL para a sua altura.</p>`;
    resultado.classList.add('codigo-certo');
  } else if (imc >= 25 && imc < 30) {
    resultado.innerHTML += `<p>Você está com SOBREPESO, tenha cuidado.</p>`;
    resultado.classList.add('sobrepeso');
  } else if (imc >= 30 && imc < 40) {
    resultado.innerHTML += `<p>Você está com OBESIDADE, procure um médico.</p>`;
    resultado.classList.add('sobrepeso');
  } else if (imc >= 40) {
    resultado.innerHTML += `<p>Você está com OBESIDADE GRAVE, procure um médico URGENTEMENTE!</p>`;
    resultado.classList.add('obesidade');
  } else {
    resultado.innerHTML = `<p>Desculpe, mas nosso sistema não conseguiu ler os seus dados. :(</p>`;
    resultado.classList.add('erro-codigo');
  }
}

form.addEventListener("submit", calculoIMC);
