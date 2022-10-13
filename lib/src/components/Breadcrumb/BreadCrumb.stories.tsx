import { Breadcrumb } from "./Breadcrumb";
import type { Story } from "@ladle/react";
import { BreadcrumbProps } from "./breadcrumb.types";

export const Controls: Story<BreadcrumbProps> = ({
  crumbs,
  separator = "/",
  className,
  ...nativeProps
}) => (
  <>
    <Breadcrumb crumbs={crumbs} separator={separator} {...nativeProps} />
  </>
);
const crumbs = [
  { title: "Hover" },
  { title: "Documantation", href: "#" },
  { title: "About", href: "#" },
];
const separator = ">";
Controls.args = {
  crumbs,
  separator,
};
