import { useSelector, useDispatch, selectOption } from 'Imports';

export const Question = () => {
  const { index, correct, wrong, data, optionIndex, end } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const onClick = (option, index) => {
    dispatch(selectOption({ option, index }));
  };

  return (
    <div className={`question-container ${end && 'end'}`}>
      <div className="question-header">
        Question {data[index].id} ({data.length - (correct + wrong)} remaining)
      </div>
      <h2 className="question">{data[index].que}</h2>
      <div className="question-header">Answer Options</div>
      <ol className="list">
        {data[index].options.map((option, index) => (
          <li
            key={index}
            className={optionIndex === index ? 'selected' : ''}
            onClick={() => onClick(option, index)}
          >
            {index + 1}) {option}
          </li>
        ))}
      </ol>
    </div>
  );
};
