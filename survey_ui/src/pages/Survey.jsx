import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RadioButtonGroup from '../components/RadioButtonGroup.jsx';
import InputField from '../components/Inputfield.jsx';
import Button from '../components/Button.jsx';

function Survey() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`/api/survey/active/${id}`);
        setSurvey(response.data);
      } catch (error) {
        console.error('Error fetching survey:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurvey();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the answers to the backend
    try {
      await axios.post(`/api/survey/active${id}/submit`, { email, answers });
      alert('Survey submitted successfully');
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="survey-page">
      <h1>{survey.title}</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="Email" type="email" name="email" value={email} onChange={handleEmailChange} />
        {survey.questions.map((question) => (
          <RadioButtonGroup
            key={question.id}
            question={question.text}
            options={question.options}
            name={question.id}
            selectedValue={answers[question.id]}
            onChange={handleInputChange}
          />
        ))}
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Survey;
