import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div>
      <button {...props}></button>
    </div>
  );
};

export const PrimaryButton: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div className="flex items-center pb-2">
      <button
        {...props}
        className="w-full h-12 font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded-full outline-none w-fullh-12 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none"
        type="submit"
      >
        ورود
      </button>
    </div>
  );
};

export const SecondaryButton: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div className="flex items-center pb-2">
      <button
        {...props}
        className="w-full h-12 mb-1 mr-1 font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded-full outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none"
        type="submit"
      >
        ثبت نام
      </button>
    </div>
  );
};
