import Toastify from "toastify-js";

export const toast = (text, type?) => {
  switch (type) {
    case "success":
      Toastify({
        text: text,
        backgroundColor: "rgb(22, 182, 22)",
        duration: 5000,
        offset: { y: 40, x: 40 },
      }).showToast();
      break;
    case "error":
      Toastify({
        text: text,
        backgroundColor: "#f7583b",
        duration: 5000,
        offset: { y: 40, x: 40 },
      }).showToast();
      break;
    case "warning":
      Toastify({
        text: text,
        backgroundColor: "grey",
        duration: 5000,
        offset: { y: 40, x: 40 },
      }).showToast();
      break;
    default:
      Toastify({
        text: text,
        backgroundColor: "rgb(22, 182, 22)",
        duration: 5000,
        offset: { y: 40, x: 40 },
      }).showToast();
      break;
  }
};

export const logger = (text: any, type?: string) => {
  console.log(text);
};
