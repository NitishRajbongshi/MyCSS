const modal_btn = document.getElementById("modal_btn");
const dialog = document.querySelector("dialog");
const close_modal = document.getElementById("close_modal");
modal_btn.addEventListener("click", () => {
  dialog.showModal();
});

close_modal.addEventListener("click", () => {
  dialog.close();
});
