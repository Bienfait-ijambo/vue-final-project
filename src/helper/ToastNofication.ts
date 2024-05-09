import { useToast } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";

const toast = useToast();

export function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
}

export function successMsg(message: string) {
  toast.success(message, {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
}