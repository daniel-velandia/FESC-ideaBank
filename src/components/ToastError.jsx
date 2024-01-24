import { toast, Bounce } from "react-toastify";

const ToastError = ({ message }) => {
  toast.error(`Error: ${message}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  return null;
};

export default ToastError;
