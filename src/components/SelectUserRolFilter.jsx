import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { ROL_ALL_GET_ENDPOINT } from "../connections/helpers/endpoints";
import Form from "react-bootstrap/Form";

export const SelectUserRolFilter = ({ onRolesChange }) => {
  const [rols, setrols] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedRoles((prevSelectedRoles) => [...prevSelectedRoles, value]);
    } else {
      setSelectedRoles((prevSelectedRoles) =>
        prevSelectedRoles.filter((role) => role !== value)
      );
    }
  };

  useEffect(() => {
    axios
      .get(ROL_ALL_GET_ENDPOINT)
      .then((response) => {
        setrols(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rols:", error);
      });
  }, []);

  useEffect(() => {
    onRolesChange(selectedRoles);
  }, [selectedRoles, onRolesChange]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Filtrar Roles
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Form className="p-2">
          {rols.map((rol, index) => (
            <Form.Check
              key={index}
              id={"check" + index}
              type="checkbox"
              label={rol.nameRol}
              value={rol.nameRol}
              onChange={handleCheckboxChange}
            />
          ))}
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
};
