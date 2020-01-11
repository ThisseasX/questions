// Declarative template
const questionTemplate = ({ question: [questionName, question], handleClick }) => {
  const output = e('div', { style: { display: 'flex', flexDirection: 'column' } }, [
    e('label', { htmlFor: questionName }, t(question)),
    e('input', { id: questionName, name: questionName, autocomplete: 'off' }),
    e('button', { onclick: handleClick, style: { height: '48px' } }, t('Next')),
  ]);

  return output;
};

// Literal template alternative
const questionTemplateLiteral = ({
  question: [questionName, question],
  handleClick,
}) => {
  window._currentClick = handleClick;

  const output = `
    <div style="display: flex; flex-direction: column;">
      <label for="${questionName}">${question}</label>
      <input id="${questionName}" name="${questionName}" autocomplete="off">
      <button onclick="_currentClick()" style="height: 48px">Next</button>
    </div>
  `;

  return output;
};
