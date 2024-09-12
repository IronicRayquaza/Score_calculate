import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
  });

  const [result, setResult] = useState({
    total: null,
    average: null,
    grade: '',
  });

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const calculateResult = () => {
    const totalMarks = Object.values(marks).reduce((acc, curr) => acc + parseFloat(curr || 0), 0);
    const averageMarks = totalMarks / 5;
    let grade = '';

    if (averageMarks >= 90) grade = 'A';
    else if (averageMarks >= 80) grade = 'B';
    else if (averageMarks >= 70) grade = 'C';
    else if (averageMarks >= 60) grade = 'D';
    else grade = 'F';

    setResult({
      total: totalMarks,
      average: averageMarks.toFixed(2),
      grade,
    });
  };

  return (
    <div className="container">
      <h1 className="title">Result Calculator</h1>
      <div className="form-container">
        {['subject1', 'subject2', 'subject3', 'subject4', 'subject5'].map((subject, index) => (
          <input
            key={subject}
            type="number"
            name={subject}
            placeholder={`Marks in Subject ${index + 1}`}
            value={marks[subject]}
            onChange={handleChange}
            className="input"
          />
        ))}
        <button onClick={calculateResult} className="button">
          Calculate Result
        </button>
      </div>
      {result.total !== null && (
        <div className="result">
          <p>Total Marks: {result.total}</p>
          <p>Average Marks: {result.average}</p>
          <p>Grade: {result.grade}</p>
        </div>
      )}
    </div>
  );
};

export default App;
