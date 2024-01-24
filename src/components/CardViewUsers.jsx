import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { USER_LIST_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { SelectUserRolFilter } from "./SelectUserRolFilter";

export const CardViewUsers = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleCheckboxChange = (selectedRoles) => {
    setSelectedRoles(selectedRoles);
    fetchUsers(selectedRoles);
  };

  const fetchUsers = (selectedRoles) => {
    let token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Construccion de la URL con los roles seleccionados
    const url =
      USER_LIST_GET_ENDPOINT +
      (selectedRoles.length > 0
        ? `?roles=${selectedRoles.join("&roles=")}`
        : "");

    axios
      .get(url)
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUsers([]);
  }, []);

  return (
    <>
      <Row className="gx-5 border-bottom mx-2 p-2">
        <Col>
          <h6>Usuarios Encontrados</h6>
        </Col>
        <Col className="text-end">
          <SelectUserRolFilter onRolesChange={handleCheckboxChange} />
        </Col>
      </Row>

      {usuarios.map((usuario, index) => (
        <Col key={index}>
          <div className="d-flex text-body-secondary pt-3">
            <svg
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              {/* <title>Placeholder</title> */}
              <rect width="100%" height="100%" fill="#007bff"></rect>
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">{usuario.name}</strong>
                <Link to={`/user?q=${usuario.email}`}>Follow</Link>
              </div>
              <span className="d-block">{usuario.email}</span>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};
