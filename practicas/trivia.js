const preguntas = [
  {
    id: 1,
    label: "Quién ganó el mundial 2018?"
  },
  {
    id: 2,
    label: "Quién ganó la Libertadores 2020?"
  }
];

const respuestas = [
  {
    questionId: 1,
    label: "Argentina",
    correct: false,
  },
  {
    questionId: 1,
    label: "Francia",
    correct: true,
  },
  {
    questionId: 1,
    label: "Alemania",
    correct: false,
  },
  {
    questionId: 2,
    label: "Palmeiras",
    correct: true,
  },
  {
    questionId: 2,
    label: "Boca",
    correct: false,
  },
  {
    questionId: 2,
    label: "River",
    correct: false,
  },
];

const position = 1;

const pregunta = prompt(
  `
    ${preguntas[position].label}
    ${respuestas.map(function(e) {
        if (e.questionId === position + 1) return e.label
    }).join(' ')}
  `
);

respuestas.map(function (e) {
  if (pregunta === e.label) {
    // if (e.correct === true) {
    //   alert(`${pregunta} es correcta!`);
    // } else {
    //   alert(`${pregunta} es incorrecta!`);
    // }
    e.correct === true ? alert(`${pregunta} es correcta!`) : alert(`${pregunta} es incorrecta!`);
  }
});




