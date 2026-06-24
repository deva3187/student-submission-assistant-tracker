import React from "react";

function AssignmentList({
  assignments,
  setAssignments,
}) {

  const markSubmitted = (id) => {
    setAssignments(
      assignments.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Submitted",
            }
          : item
      )
    );
  };

  const deleteAssignment = (id) => {
    setAssignments(
      assignments.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="assignment-list">

      {assignments.length === 0 ? (
        <h3>No Assignments Added</h3>
      ) : (
        assignments.map((item) => (
          <div
            className="assignment-card"
            key={item.id}
          >
            <h3>{item.title}</h3>

            <p>
              <strong>Subject:</strong>{" "}
              {item.subject}
            </p>

            <p>
              <strong>Due Date:</strong>{" "}
              {item.date}
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
  );
}

export default AssignmentList;
