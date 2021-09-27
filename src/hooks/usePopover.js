import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function usePopover(id = uuidv4()) {
  const [anchorEl, setAnchorEl] = useState(null);

  const show = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const hide = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return {
    id: open ? id : undefined,
    anchorEl,
    open,
    show,
    hide,
  };
}

export default usePopover;
