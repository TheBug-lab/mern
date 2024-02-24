function promptQuestion(age) {
  let num1, num2, generatedQues;

  let message = ["Enter age", 0];

  let junQuestion = ["add", "sub"];
  let senQuestion = ["add", "sub", "mult"];
  let advQuestion = ["add", "sub", "mult", "div"];

  if (+age < 7 && +age > 0) {
    generatedQues = junQuestion[randomNumber(2)];
    num1 = randomNumber(10);
    num2 = randomNumber(10);
  } else if (+age > 7 && +age < 10) {
    generatedQues = senQuestion[randomNumber(3)];
    num1 = randomNumber(15);
    num2 = randomNumber(30);
  } else {
    generatedQues = advQuestion[randomNumber(4)];
    num1 = randomNumber(100);
    num2 = randomNumber(30);
  }

  if (generatedQues === "add") {
    message = [`${num1} + ${num2} ? `, num1 + num2];
    return message;
  }

  if (generatedQues === "sub") {
    message = [`${num1} - ${num2} ? `, num1 - num2];
    return message;
  }
  if (generatedQues === "mult") {
    message = [`${num1} * ${num2} ? `, num1 * num2];
    return message;
  }
  if (generatedQues === "div") {
    message = [`${num1} / ${num2} ? `, num1 / num2];
    return message;
  }
  return message;
}

function randomNumber(size) {
  return Math.floor(Math.random() * size);
}

export default promptQuestion;
