import React from "react";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  readonly children: React.ReactNode;
  readonly submit?: boolean;
};

export function Button({
  submit = false,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="inline-flex justify-center items-center focus:outline-none border-none px-4 py-2 bg-slate-600 text-semibold text-slate-100 dark:bg-slate-300 dark:text-slate-800 focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-200 focus:ring-offset-2 disabled:bg-opacity-75 dark:disabled:bg-opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}
