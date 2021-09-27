import React from "react";

import { Button } from "components";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      name: "Variant",
      defaultValue: "contained",
      options: ["contained", "outlined", "text"],
      control: {
        type: "inline-radio",
      },
    },
    color: {
      name: "Color",
      defaultValue: "default",
      options: ["default", "primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      name: "Size",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      name: "Disabled",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    disableElevation: {
      name: "Disable Elevation",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      name: "Full Width",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    children: {
      name: "Text",
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {};
