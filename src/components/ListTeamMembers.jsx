import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

export const ListTeamMembers = ({ students, onStudentSelect }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleUserClick = (studentId) => {
    const isSelected = selectedStudents.includes(studentId);

    setSelectedStudents((prevSelectedStudents) => {
      if (isSelected) {
        return prevSelectedStudents.filter((id) => id !== studentId);
      } else {
        return [...prevSelectedStudents, studentId];
      }
    });

    onStudentSelect(selectedStudents);
  };

  return (
    <div className="mt-4" style={{ maxHeight: "320px", overflowY: "auto" }}>
      <ListGroup>
        {students.map((student) => (
          <ListGroup.Item
            key={student.id}
            onClick={() => handleUserClick(student.id)}
            style={{
              cursor: "pointer",
              position: "relative",
              opacity: selectedStudents.includes(student.id) ? 0.2 : 1,
            }}
          >
            {student.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
