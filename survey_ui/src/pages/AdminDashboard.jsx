import { useState } from 'react';
import InputField from '../components/Inputfield.jsx';
import Button from '../components/Button';

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', ''] }]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][e.target.name] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', ''] }]);
  };

  const submitSurvey = async (e) => {
    e.preventDefault();
    // Send survey data to the backend
    const surveyData = { title, description, questions };
    try {
      await axios.post('/api/surveys', surveyData);
      alert('Survey created successfully');
    } catch (error) {
      console.error('Error creating survey:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Create Survey</h1>
      <form onSubmit={submitSurvey}>
        <InputField label="Survey Title" type="text" name="title" value={title} onChange={handleTitleChange} />
        <InputField label="Description" type="text" name="description" value={description} onChange={handleDescriptionChange} />
        {questions.map((question, index) => (
          <div key={index}>
            <InputField label={`Question ${index + 1}`} type="text" name="text" value={question.text} onChange={(e) => handleQuestionChange(index, e)} />
            {question.options.map((option, optionIndex) => (
              <InputField
                key={optionIndex}
                label={`Option ${optionIndex + 1}`}
                type="text"
                name="options"
                value={option}
                onChange={(e) => handleQuestionChange(index, e)}
              />
            ))}
          </div>
        ))}
        <Button label="Add Question" onClick={addQuestion} />
        <Button label="Submit Survey" type="submit" />
      </form>
    </div>
  );
}

export default AdminDashboard;
