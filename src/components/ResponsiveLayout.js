import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { vars } from "theme";

function ResponsiveLayout({ drawer, children }) {
  return (
    <>
      {drawer ? drawer : null}
      <Box
        component="main"
        sx={{
          position: "absolute",
          top: { xs: vars.headerHeightSm, sm: vars.headerHeight },
          width: drawer
            ? { xs: "100%", sm: `calc(100% - ${vars.drawerWidth}px)` }
            : {},
          ml: drawer ? { sm: `${vars.drawerWidth}px` } : {},
        }}
      >
        {children}
      </Box>
    </>
  );
}

ResponsiveLayout.propTypes = {
  drawer: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default ResponsiveLayout;
