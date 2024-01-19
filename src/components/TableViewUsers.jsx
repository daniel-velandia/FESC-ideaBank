import usersData from "../data/usersData";
import { useState } from "react";

export const TableViewUsers = () => {
  const initialUsers = usersData;
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const filterUsers = () => {
    let filteredUsers = initialUsers;

    if (searchTerm) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRole) {
      filteredUsers = filteredUsers.filter((user) => user.rol === selectedRole);
    }

    setUsers(filteredUsers);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterUsers();
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    filterUsers();
  };

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Buscar por nombre o correo"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">Filtrar por Rol</option>
          <option value="Docente">Docente</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Director">Director</option>
        </select>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo Electronico</th>
            <th scope="col">Telefono</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
              <td>{user.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
