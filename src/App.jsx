import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  const updateScore = (id, newScore) => {
    let score = Number(newScore);

    if (score < 0) score = 0;
    if (score > 100) score = 100;

    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score } : s
      )
    );
  };

  const addStudent = (name, score) => {
  let newScore = Number(score);

  if (newScore < 0 || newScore > 100) {
    alert("Score must be between 0 and 100");
    return;
  }

    const newStudent = {
    id: Date.now(),
    name,
    score: newScore,
  };

  setStudents([...students, newStudent]);
  };

  const avg =
    students.reduce((a, b) => a + b.score, 0) / students.length;

  return (
    <div className="app">
      <Header />

      {/* FORM */}
      <div className="container">
        <h3>REGISTER STUDENT</h3>
        <AddStudentForm addStudent={addStudent} />
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-box">
          <h3>TOTAL</h3>
          <p>{students.length}</p>
        </div>

        <div className="stat-box">
          <h3>PASSED</h3>
          <p>{students.filter((s) => s.score >= 40).length}</p>
        </div>

        <div className="stat-box">
          <h3>AVG SCORE</h3>
          <p>{Math.floor(avg)}</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="container">
        <h3>STUDENT RECORDS</h3>
        <StudentTable students={students} updateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;