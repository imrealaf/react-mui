import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";
import { Container, Button } from "components";
import { useState } from "react";

const colors = [
  {
    label: "Primary",
    value: "primary",
  },
  {
    label: "Secondary",
    value: "secondary",
  },
  {
    label: "Success",
    value: "success",
  },
  {
    label: "Error",
    value: "error",
  },
  {
    label: "Info",
    value: "info",
  },
  {
    label: "Warning",
    value: "warning",
  },
];

const sizes = [
  {
    label: "Small",
    value: "small",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Large",
    value: "large",
  },
];

function ButtonPage() {
  const [data, setData] = useState({
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    fullWidth: false,
    disableElevation: false,
  });

  const handleChange = (key, e, bool) => {
    const newData = {
      ...data,
    };
    newData[key] = bool ? e.target.checked : e.target.value;

    setData(newData);
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor: "primary.main",
            textAlign: "center",
            py: 5,
            mb: 4,
            borderRadius: "0.4rem",
          }}
        >
          <Typography variant="h3" color="white">
            <strong>Button</strong>
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Basic button
          </Typography>
          <Typography sx={{ mb: 2 }}>
            The Button comes with three variants: text (default), contained, and
            outlined.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="text">
                Text
              </Button>
              <Button sx={{ mx: 1 }} variant="contained">
                Contained
              </Button>
              <Button sx={{ mx: 1 }} variant="outlined">
                Outlined
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Text buttons
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Text buttons are typically used for less-pronounced actions,
            including those located: in dialogs, in cards. In cards, text
            buttons help maintain an emphasis on card content.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="text">
                Primary
              </Button>
              <Button sx={{ mx: 1 }} variant="text" disabled>
                Disabled
              </Button>
              <Button sx={{ mx: 1 }} variant="text" href="#text-buttons">
                Link
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Contained buttons
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your
            app.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="contained">
                Contained
              </Button>
              <Button sx={{ mx: 1 }} variant="contained" disabled>
                Disabled
              </Button>
              <Button sx={{ mx: 1 }} variant="contained" href="#text-buttons">
                Link
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Playground
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Use these controls to experiment with all the button's features
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                  <Button {...data}>Button</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">Variation</FormLabel>
                    <RadioGroup
                      value={data.variant}
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      onChange={(value) => handleChange("variant", value)}
                    >
                      <FormControlLabel
                        value="contained"
                        control={<Radio />}
                        label="Contained"
                      />
                      <FormControlLabel
                        value="outlined"
                        control={<Radio />}
                        label="Outlined"
                      />
                      <FormControlLabel
                        value="text"
                        control={<Radio />}
                        label="Text"
                      />
                    </RadioGroup>
                  </FormControl>

                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Color</InputLabel>
                        <Select
                          value={data.color}
                          label="Color"
                          onChange={(value) => handleChange("color", value)}
                        >
                          {colors.map((color, i) => (
                            <MenuItem key={i} value={color.value}>
                              {color.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Size</InputLabel>
                        <Select
                          value={data.size}
                          label="size"
                          onChange={(value) => handleChange("size", value)}
                        >
                          {sizes.map((size, i) => (
                            <MenuItem key={i} value={size.value}>
                              {size.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.disabled}
                            onChange={(value) =>
                              handleChange("disabled", value, true)
                            }
                          />
                        }
                        label="Disabled"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.disableElevation}
                            onChange={(value) =>
                              handleChange("disableElevation", value, true)
                            }
                          />
                        }
                        label="Disable elevation"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
export default ButtonPage;
