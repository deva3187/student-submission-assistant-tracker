import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("assignments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "assignments",
      JSON.stringify(assignments)
    );
  }, [assignments]);

  const addAssignment = () => {
    if (!title || !subject || !dueDate) {
      alert("Fill all fields");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title,
      subject,
      dueDate,
      status: "Pending",
    };

    setAssignments([...assignments, newAssignment]);

    setTitle("");
    setSubject("");
    setDueDate("");
  };

  const markSubmitted = (id) => {
    setAssignments(
      assignments.map((item) =>
        item.id === id
          ? { ...item, status: "Submitted" }
          : item
      )
    );
  };

  const deleteAssignment = (id) => {
    setAssignments(
      assignments.filter((item) => item.id !== id)
    );
  };

  const total = assignments.length;

  const submitted = assignments.filter(
    (item) => item.status === "Submitted"
  ).length;

  const pending = assignments.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <div className="container">
      <h1>Student Submission Assistant Tracker</h1>

      <div className="dashboard">
        <div className="card">
          <h2>{total}</h2>
          <p>Total Assignments</p>
        </div>

        <div className="card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="card">
          <h2>{submitted}</h2>
          <p>Submitted</p>
        </div>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        <button onClick={addAssignment}>
          Add Assignment
        </button>
      </div>

      <div className="assignment-list">
        {assignments.length === 0 ? (
          <h3>No Assignments Added</h3>
        ) : (
          assignments.map((item) => (
            <div className="assignment-card" key={item.id}>
              <h3>{item.title}</h3>

              <p>
                <strong>Subject:</strong>{" "}
                {item.subject}
              </p>

              <p>
                <strong>Due Date:</strong>{" "}
                {item.dueDate}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {item.status}
              </p>

              {item.status === "Pending" && (
                <button
                  className="submit-btn"
                  onClick={() =>
                    markSubmitted(item.id)
                  }
                >
                  Mark Submitted
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() =>
                  deleteAssignment(item.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
