import React from "react";
import ErrorMsg from "../common/err-msg";
import { CloseEye, OpenEye } from "../svg";

type IProps = {
  type: string;
  placeholder: string;
  icon: React.JSX.Element;
  error?: string;
  children?: React.ReactNode;
};

export default function InputField({
  type,
  placeholder,
  icon,
  error,
  children,
  ...props
}: IProps) {
  return (
    <div className="login__input-item">
      <div className="login__input">
        <input type={type} placeholder={placeholder} {...props} />
        <span>{icon}</span>
      </div>
      {children}
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}


export const PasswordToggle = ({ isVisible, onToggle }: { isVisible: boolean; onToggle: () => void }) => (
    <div className="tp-login-input-eye password-show-toggle" onClick={onToggle}>
        <span className={`${isVisible ? "open-eye open-eye-icon" : "open-close close-eye-icon"}`}>
            {isVisible ? <OpenEye /> : <CloseEye />}
        </span>
    </div>
);


interface IContactInputProps {
  top_cls?: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
}

export function ContactInputField({
  top_cls = 'tp-contact-input',
  label,
  id,
  type,
  placeholder,
  required = false,
  error,
  ...props
}: IContactInputProps) {
  return (
    <div className={`${top_cls} mb-25`}>
      <label className="tp-label mb-5" htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        className="tp-input"
        {...props}
      />
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}
export function ContactTextAreaField({
  top_cls = 'tp-contact-textarea',
  label,
  id,
  placeholder,
  required = false,
  error,
  ...props
}: Omit<IContactInputProps, "type">) {
  return (
    <div className={`${top_cls} mb-15`}>
      <label className="tp-label mb-5" htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        className="tp-textarea"
        {...props}
      />
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}
