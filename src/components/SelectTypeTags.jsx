import Badge from "react-bootstrap/Badge";

const SelectTypeTags = ({ name }) => {
  const states = {
    "INGENIERIA DE SOFWARE": "my-badge-career-software",
    "DISEÃ‘O GRAFICO": "my-badge-career-graphic",
    "ADMINISTRACION FINANCIERA": "my-badge-career-financial",
    "DISEÃ‘O DE MODAS": "my-badge-career-fashions",
    "HOTELERIA Y TURISMO": "my-badge-career-tourism",
    "LOGISTICA EMPRESARIAL": "my-badge-career-logistics",
  };

  // Busca el nombre en el objeto states y obtén el className correspondiente
  const className = states[name.toUpperCase()] || "";

  return (
    <Badge
      className={className}
      style={{
        borderRadius: "50px", 
        margin: "5px", 
        cursor: "pointer",
      }}
    >
      {name}
    </Badge>
  );
};

export default SelectTypeTags;
