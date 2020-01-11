class QuestionHandler {
  constructor(questionObject) {
    this.questionEntries = Object.entries(questionObject);
    this.lastQuestionIndex = this.questionEntries.length - 1;
    this.answers = {};
    this.activeQuestionIndex = 0;
  }

  incrementQuestionIndex = () => {
    this.activeQuestionIndex++;
  };

  getCurrentQuestion = () => this.questionEntries[this.activeQuestionIndex];

  saveAnswer = (name, value) => {
    this.answers[name] = value;
  };

  getAnswers = () => this.answers;

  hasQuestion = () => this.activeQuestionIndex <= this.lastQuestionIndex;
}
