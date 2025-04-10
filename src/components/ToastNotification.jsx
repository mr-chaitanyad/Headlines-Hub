import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function ToastNotification({ show, message }) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show && toastRef.current) {
      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
    }
  }, [show]);

  return (
    <div
      className="position-fixed top-50 start-50 translate-middle p-3"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={toastRef}
        className="toast show text-white bg-secondary border-0 shadow-lg"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex align-items-center">
          <div className="toast-body fw-semibold">
            {message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}
