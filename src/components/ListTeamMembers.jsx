import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

export const ListTeamMembers = ({ students, onStudentSelect }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleCheckboxChange = (studentId) => {
    setSelectedStudents((prevSelectedStudents) => {
      const isSelected = prevSelectedStudents.includes(studentId);

      if (isSelected) {
        return prevSelectedStudents.filter((id) => id !== studentId);
      } else {
        return [...prevSelectedStudents, studentId];
      }
    });

    // Llama a la función de devolución de llamada con el estado más reciente
    onStudentSelect(selectedStudents);
  };

  return (
    <div style={{ maxHeight: "640px", overflowY: "auto" }}>
      <ListGroup>
        {students.map((student) => (
          <ListGroup.Item key={student.id}>
            <Form.Check
              type="checkbox"
              id={`checkbox-${student.id}`}
              label={student.name}
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleCheckboxChange(student.id)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

