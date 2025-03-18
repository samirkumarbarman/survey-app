import { Link } from 'react-router-dom';

function SurveyCard({ survey }) {
  return (
    <div className="survey-card">
      <h3>{survey.title}</h3>
      <p>{survey.description}</p>
      <Link to={`/survey/${survey.id}`} className="survey-link">
        Participate
      </Link>
    </div>
  );
}

export default SurveyCard;
