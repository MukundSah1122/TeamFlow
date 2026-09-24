import { LoaderCircle } from "lucide-react";

function LoadingState({
  message = "Loading TeamFlow...",
}) {
  return (
    <div className="state-container">
      <LoaderCircle
        className="state-spinner"
        size={28}
      />

      <h3>Loading</h3>

      <p>{message}</p>
    </div>
  );
}

export default LoadingState;