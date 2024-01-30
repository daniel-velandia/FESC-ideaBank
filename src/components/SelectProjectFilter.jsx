import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const SelectProjectFilter = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get('filter');

  const renderFilterTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Filtrar proyectos
    </Tooltip>
  );
    
  return (
    <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderFilterTooltip}
        >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="my-dropdown-project-filter">
            <FaFilter className="mr-2" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item 
            as={NavLink} 
            to="/" 
            className={`my-dropdown-filter-${!filter ? "active" : "desactive"}`}>
                Todos
            </Dropdown.Item>
            <Dropdown.Item 
            as={NavLink} 
            to="/?filter=mine" 
            className={`my-dropdown-filter-${filter ? "active" : "desactive"}`}>
                Mis proyectos
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </OverlayTrigger>
  );
}

export { SelectProjectFilter };
