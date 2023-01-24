import { ComponentMeta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./index";

export default {
  title: "Buttons/Button",
  component: Button,

  //Argumentos que o componente espera
  argTypes: {
    variant: {
      defaultValue: "primary",
      control: {
        type: "select",
        values: ["primary", "secondary", "outline"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary Button</Button>
);

//VARIAÇÃO SECONDARY
export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Secondary Button</Button>
);

Secondary.args = {
  variant: "secondary",
};

//VARIAÇÃO OUTLINE
export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args}>Outline Button</Button>
);

Outline.args = {
  variant: "outline",
};
