import type { UseFormRegister } from "react-hook-form";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type FormFieldProps = {
  id: keyof ContactFormData;
  label: string;
  placeholder: string;
  error?: string;
  type?: "text" | "email" | "textarea";
  rows?: number;
  register: UseFormRegister<ContactFormData>;
};

export const FormField = ({
  id,
  label,
  placeholder,
  error,
  type = "text",
  rows,
  register,
}: FormFieldProps) => (
  <div>
    <label htmlFor={id}>{label}</label>
    {type === "textarea" ? (
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        {...register(id)}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        {...register(id)}
      />
    )}
    <p className="text-red-500 text-sm mt-1 min-h-5">{error}</p>
  </div>
);
