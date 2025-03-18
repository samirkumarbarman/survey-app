import { useState, useEffect } from 'react';
import axios from 'axios';
import SurveyCard from '../components/SurveyCard';
import LoadingSpinner from '../components/LoadingSpinner';

function Home() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('/api/survey/active');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurveys();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="home-page">
      <h1>Available Surveys</h1>
      <div className="survey-list">
        {surveys.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </div>
    </div>
  );
}

export default Home;
