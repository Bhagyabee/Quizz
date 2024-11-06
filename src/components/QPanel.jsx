// Quiz.js
import React, { useState } from "react";
import questions from "../data.json";

const QPanel = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(""); // Reset selected option for next question
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center mt-16 p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-green-500">
          🎉 Quiz Completed!
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Your score: <span className="font-bold">{score}</span> out of{" "}
          <span className="font-bold">{questions.length}</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-all"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-16 p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="text-lg mb-4 text-center text-gray-800">
        {currentQuestion.question}
      </p>
      <div className="space-y-3 w-full">
        {currentQuestion.options.map((option) => (
          <label
            key={option}
            className="flex items-center w-full p-3 border rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all"
          >
            <input
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="form-radio text-blue-500 h-5 w-5 mr-3"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default QPanel;
