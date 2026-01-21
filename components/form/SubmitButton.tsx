import { buttonBase } from "@/styles/formStyles";

export const SubmitButton = ({
  loading,
}: {
  loading: boolean;
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`${buttonBase} w-full md:w-2/3 mx-auto block`}
    >
      {loading ? "Sending..." : "Submit"}
    </button>
  );
};
