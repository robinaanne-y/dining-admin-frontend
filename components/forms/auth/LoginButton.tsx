

const LoginButton = ({ isPending }: { isPending: boolean }) => {
  return (
    <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
  )
}

export default LoginButton