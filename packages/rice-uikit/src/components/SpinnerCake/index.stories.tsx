import React from "react";
import SpinnerCake from "./SpinnerCake";

export default {
  title: "Components/SpinnerCake",
  component: SpinnerCake,
  argTypes: {
    size: { control: "number" },
  },
};

export const Default: React.FC = () => {
  return <SpinnerCake size={50} />;
};

export const Sized: React.FC = (args) => {
  return <SpinnerCake size={...args} />;
};