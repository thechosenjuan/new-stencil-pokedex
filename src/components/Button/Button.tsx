import { h } from "@stencil/core";

export const Button = props => {
  return <div class="button" onClick={props.onClick} />;
};
