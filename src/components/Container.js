import PropTypes from "prop-types";
import { Container } from "@mui/material";

function CustomContainer({ children }) {
  return (
    <Container
      sx={{
        maxWidth: "100%",
        p: { xs: 3, md: 4 },
      }}
    >
      {children}
    </Container>
  );
}

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomContainer;
