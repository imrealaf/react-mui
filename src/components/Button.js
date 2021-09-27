import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function CustomButtom({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

CustomButtom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButtom;
