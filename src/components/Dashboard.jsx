import React from "react";

function Dashboard({ assignments }) {
  const totalAssignments = assignments.length;

  const pendingAssignments =
    assignments.filter(
      (item) => item.status === "Pending"
    ).length;

  const submittedAssignments =
    assignments.filter(
      (item) => item.status === "Submitted"
    ).length;

  return (
    <div className="dashboard">

      <div className="card">
        <h2>{totalAssignments}</h2>
        <p>Total Assignments</p>
      </div>

      <div className="card">
        <h2>{pendingAssignments}</h2>
        <p>Pending</p>
      </div>

      <div className="card">
        <h2>{submittedAssignments}</h2>
        <p>Submitted</p>
      </div>

    </div>
  );
}

export default Dashboard;
