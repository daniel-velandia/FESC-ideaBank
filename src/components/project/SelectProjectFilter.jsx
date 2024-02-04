import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";
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
      <Dropdown.Toggle  variant="ligth" id="dropdown-basic" style={{backgroundColor : "#EBEBEB"}}>
        <Funnel/>
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
