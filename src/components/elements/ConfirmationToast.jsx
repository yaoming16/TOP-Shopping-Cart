import { useEffect } from "react";

import s from "../../styles/elements/confirmationToast.module.css";

function ConfirmationToast({ valid = true, open = false, setOpen }) {
  useEffect(() => {
    if (!open) return;

    const timeOutId = setTimeout(() => {
      setOpen(false);
    }, 4000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [open]);

  if (valid) {
    return <div className={`${open ? s.show : null} ${s.container}`}>asd</div>;
  }
}

export default ConfirmationToast;
