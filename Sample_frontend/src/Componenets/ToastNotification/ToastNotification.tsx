import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

const ToastNotification: React.FC<ToastProps> = ({ message, type = "success", duration = 3000 }) => {
  const showToast = () => {
    toast(message, {
      position: "top-center",
      autoClose: duration,
      style: { backgroundColor: "orange", color: "black", zIndex: 9999}, // Custom styling
    });
  };

  return (
    <>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer />
    </>
  );
};

export default ToastNotification;
