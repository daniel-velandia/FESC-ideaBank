const SelectTypeTags = ({ name, color }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: "10px", // Ajusta el padding según tus preferencias
    color: "white",
    border: "none",
    borderRadius: "50px", // Hace que el botón sea ligeramente circular
    margin: "5px", // Agrega margen entre los botones
    cursor: "pointer",
  };

  return <button style={buttonStyle}>{name}</button>;
};

export default SelectTypeTags;
