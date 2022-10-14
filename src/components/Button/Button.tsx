import React from "react";
import css from "./Button.module.css";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  readonly children: React.ReactNode;
  readonly submit?: boolean;
};

export default function Button({
  submit = false,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={css.button}
      {...props}
    >
      {children}
    </button>
  );
}
