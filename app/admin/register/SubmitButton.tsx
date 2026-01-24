import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full rounded-md bg-indigo-500 py-2 font-semibold text-white disabled:opacity-50 hover:bg-indigo-400"
    >
      {pending ? "Creating account..." : "Create account"}
    </button>
  );
}

export default SubmitButton;