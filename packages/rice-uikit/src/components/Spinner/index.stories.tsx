import React from "react";
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "number" },
  },
};

export const Default: React.FC = (args) => {
  return <Spinner  {...args} />;
};
