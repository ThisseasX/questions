// Declarative template
const answersTemplate = ({ answers }) => {
  const fragment = document.createDocumentFragment();

  Object.entries(answers).forEach(([answerName, answer]) => {
    const answerOutput = e('div', { style: { borderBottom: '2px solid black' } }, [
      e('p', {}, t(answerName)),
      e('p', {}, t(answer)),
    ]);

    fragment.appendChild(answerOutput);
  });

  return fragment;
};

// Literal template alternative
const answersTemplateLiteral = ({ answers }) => {
  const output = Object.entries(answers)
    .map(
      ([answerName, answer]) => `
          <div style="border-bottom: 2px solid black">
            <p>${answerName}</p>
            <p>${answer}</p>
          </div>
        `,
    )
    .join('');

  return output;
};
