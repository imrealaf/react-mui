import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useToggle(id = uuidv4()) {
  const [open, setActive] = useState(false);
  const show = () => setActive(true);
  const hide = () => setActive(false);
  const toggle = () => setActive(!open);

  return {
    id,
    open,
    show,
    hide,
    toggle,
  };
}

export default useToggle;
