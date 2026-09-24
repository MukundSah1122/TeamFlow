import { AlertCircle, RotateCcw } from "lucide-react";

function ErrorState({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="state-container">
      <div className="state-icon error">
        <AlertCircle size={24} />
      </div>

      <h3>Unable to load</h3>

      <p>{message}</p>

      {onRetry && (
        <button
          type="button"
          className="state-retry-button"
          onClick={onRetry}
        >
          <RotateCcw size={15} />
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;