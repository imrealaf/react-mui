import PropTypes from "prop-types";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.black,
}));

function CustomAppBar({ children, ...props }) {
  return (
    <StyledAppBar
      position="fixed"
      sx={{
        zIndex: "modal",
      }}
      {...props}
    >
      <Toolbar>{children}</Toolbar>
    </StyledAppBar>
  );
}

CustomAppBar.propTypes = {
  children: PropTypes.node,
};

export default CustomAppBar;
