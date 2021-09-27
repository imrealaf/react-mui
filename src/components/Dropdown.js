import PropTypes from "prop-types";
import { Popover } from "@mui/material";

function Dropdown({
  id,
  open,
  anchorEl,
  button,
  positionX = "left",
  positionY = "bottom",
  hide = () => {},
  children,
}) {
  return (
    <>
      {button}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={hide}
        anchorOrigin={{
          vertical: positionY,
          horizontal: positionX,
        }}
      >
        {children}
      </Popover>
    </>
  );
}

Dropdown.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, null]),
  open: PropTypes.bool,
  anchorEl: PropTypes.oneOfType([PropTypes.element, null]),
  button: PropTypes.node.isRequired,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  hide: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
