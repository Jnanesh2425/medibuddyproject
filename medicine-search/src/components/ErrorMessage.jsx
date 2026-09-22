function ErrorMessage({ message }) {
  return <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700" role="alert">{message}</p>;
}

export default ErrorMessage;