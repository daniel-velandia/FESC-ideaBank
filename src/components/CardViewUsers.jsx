import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { USER_LIST_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { SelectUserRolFilter } from "./SelectUserRolFilter";
import IconRolAdmin from "../img/icon-roles/IconRolAdmin.png";
import iconRolDirector from "../img/icon-roles/IconRolDirector.png";
import IconRolEstudiante from "../img/icon-roles/IconRolEstudiante.png";
import IconRolEmpresa from "../img/icon-roles/IconRolEmpresa.png";
import IconRolDocente from "../img/icon-roles/IconRolDocente.png";
import IconRolUsuario from "../img/icon-roles/IconRolUsuario.png";
import IconRolValidador from "../img/icon-roles/IconRolValidador.png";
import { Plus } from "react-bootstrap-icons";
import { CreateUserForm } from "./CreateUserForm";

export const CardViewUsers = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [colWidth, setColWidth] = useState("400px");

  const handleCheckboxChange = (selectedRoles) => {
    setSelectedRoles(selectedRoles);
  };

  useEffect(() => {
    fetchUsers(selectedRoles);
  }, [selectedRoles]);

  const fetchUsers = (selectedRoles) => {
    let token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const rolesQueryString =
      selectedRoles.length > 0 ? `?roles=${selectedRoles.join("&roles=")}` : "";

    const url = USER_LIST_GET_ENDPOINT + rolesQueryString;

    axios
      .get(url)
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    const handleResize = () => {
      setColWidth(window.innerWidth <= 768 ? "100%" : "400px");
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchUsers([]);
  }, []);

  const renderUserIcon = (rol) => {
    const iconMap = {
      admin: IconRolAdmin,
      director: iconRolDirector,
      validador: IconRolValidador,
      estudiante: IconRolEstudiante,
      empresa: IconRolEmpresa,
      docente: IconRolDocente,
      usuario: IconRolUsuario,
    };

    const IconComponent = iconMap[rol.toLowerCase()];

    return (
      IconComponent && (
        <img
          src={IconComponent}
          className="img-fluid"
          width={50}
          height={50}
          alt={`Icono de ${rol}`}
        />
      )
    );
  };

 
  return (
    <>
      <Row className="gx-5 mx-2 mt-2 p-2 align-items-center">
        <Col xs={12} md={6}>
          <h3>Usuarios</h3>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-end align-items-center"
        >
          <SelectUserRolFilter
            onRolesChange={handleCheckboxChange}
            className="me-2"
          />
          <CreateUserForm></CreateUserForm>
        </Col>
      </Row>

      <Row>
        {usuarios.map((usuario, index) => (
          <Col
            style={{
              width: colWidth ,
            }}
            key={index}
            xs={12}
            md={6}
            lg={4}
            className="bg-body rounded border mt-2 me-1"
          >
            <Link
              to={`/user?q=${usuario.email}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="d-flex text-body-secondary pt-3 pb-3">
                {renderUserIcon(usuario.rol)}
                <div className="px-3 mb-0 ">
                  <div className="d-flex justify-content-between">
                    <h6>
                      <strong className="text-dark">{usuario.name}</strong>
                    </h6>
                  </div>
                  <span className="d-block">{usuario.email}</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
