import { inputBase } from "@/styles/formStyles";

interface Props {
  label?: string;
  error?: string;
  register: any;
  name: string;
  type?: string;
  placeholder: string;
}

export const TextInput = ({
  error,
  register,
  name,
  type = "text",
  placeholder,
}: Props) => {
  return (
    <div className="space-y-1">
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={inputBase}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};
