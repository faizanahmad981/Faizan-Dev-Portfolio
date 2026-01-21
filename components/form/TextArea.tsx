import { textareaBase } from "@/styles/formStyles";

interface Props {
  register: any;
  name: string;
  placeholder: string;
  error?: string;
}

export const TextArea = ({
  register,
  name,
  placeholder,
  error,
}: Props) => {
  return (
    <div className="space-y-1">
      <textarea
        {...register(name)}
        rows={6}
        placeholder={placeholder}
        className={textareaBase}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};
