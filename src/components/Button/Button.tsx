import React from "react";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  readonly buttonClassName?: string;
  readonly children: React.ReactNode;
  readonly submit?: boolean;
};

export function Button({
  submit = false,
  children,
  buttonClassName,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`text-semibold inline-flex items-center justify-center rounded-xl border-none bg-slate-600 px-4 py-2 text-slate-100 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:bg-opacity-75 dark:bg-slate-300 dark:text-slate-800 dark:hover:bg-slate-200 dark:focus:ring-slate-100 dark:disabled:bg-opacity-50 ${
        buttonClassName ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
