import Badge from 'react-bootstrap/Badge';

const SelectTypeTags = ({ name, color }) => {
    
  return (
    <Badge
      style={{
        backgroundColor: color,
        borderRadius: '50px', // Hace que el badge sea ligeramente circular
        margin: '5px', // Agrega margen entre los badges
        cursor: 'pointer',
      }}
    >
      {name}
    </Badge>
  );
};

export default SelectTypeTags;
