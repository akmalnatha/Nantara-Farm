import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//kontol

export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
