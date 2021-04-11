import { useSelector } from 'Imports';

export const Header = () => {
  const { correct, wrong, end } = useSelector((state) => state);
  return (
    <div className="header">
      <div className={`header-info ${end && 'header-info-end'}`}>
        <div className="info">
          <i className="fas fa-check"></i>
          <span>{correct} correct</span>
        </div>
        <div className="info">
          <i className="fas fa-times"></i>
          <span>{wrong} wrong</span>
        </div>
      </div>
      <div className={`info clock ${end && 'end'}`}>
        <i className="far fa-clock"></i>
        <span>24:02</span>
      </div>
    </div>
  );
};
