import { Form } from "react-bootstrap";
import { useState } from "react";
import { status } from "../../utils/status";
import axios from "axios";
import { TASK_UPDATE_STATE_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../states/pageReducer";


export const SelectStateTask = ({ idTask, statusTask, onHide }) => {
    const isNeededRefresh = useSelector(state => state.page.isNeededRefresh);
    const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    const taskUpdateData = {
      identificatorTask: idTask,
      status: e.target.value
    };

    axios
        .post(TASK_UPDATE_STATE_POST_ENDPOINT, taskUpdateData)
        .then((res) => {
          dispatch(refresh({ isNeededRefresh: !isNeededRefresh }));
          onHide()
        })
        .catch((err) => {
          console.log(err);
        });
  };

  let filteredOptions = [];

  if (statusTask === status.PENDING) {
    filteredOptions = Object.entries(status).filter(
      ([key, value]) => value === "EN PROGRESO"
    );
  } else if (statusTask === status.IN_PROGRESS) {
    filteredOptions = Object.entries(status).filter(
      ([key, value]) => value === "PENDIENTE DE VALIDAR"
    );
  } else if (statusTask === status.PENDING_VALIDATION) {
    filteredOptions = Object.entries(status).filter(
      ([key, value]) => value === "LISTO" || value === "RECHAZADO"
    );
  } else if (statusTask === status.REFUSED) {
    filteredOptions = Object.entries(status).filter(
      ([key, value]) => value === "EN PROGRESO"
    );
  }

  return (
    <Form.Select
      className="me-2 w-25"
      value={selectedOption}
      onChange={handleChange}
    >
      <option value="">Actualizar estado</option>
      {filteredOptions.map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};
