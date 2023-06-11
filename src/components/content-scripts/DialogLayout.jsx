import React from "react";

const DialogLayout = ({ children, onClose }) => {
  return (
    <dialog
      id="my_tafseer_modal"
      className="modal"
      onClose={() => {
        // wait for 1 second so the animation can finish
        setTimeout(() => {
          onClose();
        }, 1000);
      }}
    >
      <form method="dialog" className="modal-box ">
        <button
          htmlFor="my_tafseer_modal"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <div className="mt-5">{children}</div>

        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">اغلق</button>
        </div>
      </form>
    </dialog>
  );
};

export default DialogLayout;
