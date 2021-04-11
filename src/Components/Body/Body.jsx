import {
  Question,
  useDispatch,
  useSelector,
  valiate,
  answerLater,
} from 'Imports';

export const Body = () => {
  const dispatch = useDispatch();
  const { index, optionChoosen, end, data } = useSelector((state) => state);

  const sendAnswer = () => {
    if (optionChoosen) dispatch(valiate());
  };

  const answerLtr = () => {
    if (index < data.length) dispatch(answerLater());
  };

  return (
    <div className="body">
      <Question />
      <div className={`button-grid ${end && 'end'}`}>
        <button className="button" onClick={answerLtr}>
          Answer Later
        </button>
        <button className="button" onClick={sendAnswer}>
          Send Answer
        </button>
      </div>
    </div>
  );
};
