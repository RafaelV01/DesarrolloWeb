import { sendEmailToResetPassword } from "./global.js";

const resetPasswordBtn = document.getElementById("reset-password-btn");
document.addEventListener("DOMContentLoaded", () => {
  resetPasswordBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    sendEmailToResetPassword(email).then(() => {
      console.log(email);
      alert("Se envio un correo para poder cambiar la contraseña");
    });
  });
});
