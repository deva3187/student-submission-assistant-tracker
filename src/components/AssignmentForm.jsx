import React, { useState } from "react";

function AssignmentForm({
  assignments,
  setAssignments,
}) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const addAssignment = () => {
    if (!title || !subject || !date) {
      alert("Please fill all fields");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title,
      subject,
      date,
      status: "Pending",
    };

    setAssignments([
      ...assignments,
      newAssignment,
    ]);

    setTitle("");
    setSubject("");
    setDate("");
  };

  return (
    <div className="form">

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) =>
          setSubject(e.target.value)
        }
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <button onClick={addAssignment}>
        Add Assignment
      </button>

    </div>
  );
}

export default AssignmentForm;
