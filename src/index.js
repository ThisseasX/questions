const root = $('#root');

const {
  incrementQuestionIndex,
  getCurrentQuestion,
  saveAnswer,
  getAnswers,
  hasQuestion,
} = new QuestionHandler(questions);

const renderNextQuestion = () => {
  const input = $('input');

  const value = input.value;
  const name = input.name;

  input.value = '';

  saveAnswer(name, value);
  incrementQuestionIndex();
  renderContent();
};

const renderContent = () => {
  if (hasQuestion()) {
    const currentQuestion = getCurrentQuestion();

    const questionNode = questionTemplate({
      question: currentQuestion,
      handleClick: renderNextQuestion,
    });

    render(questionNode, root);
  } else {
    const answers = getAnswers();
    const answersNode = answersTemplate({ answers });

    console.log(answers);

    // In case of api request, break glass
    // fetch('http://some.api', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(answers),
    // })
    //   .then(response => response.json())
    //   .then(console.log);

    render(answersNode, root);
  }
};

window.onload = () => {
  renderContent();
};
