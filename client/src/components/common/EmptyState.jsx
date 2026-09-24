import { Inbox } from "lucide-react";

function EmptyState({
  title = "Nothing here yet",
  message = "There is nothing to display right now.",
}) {
  return (
    <div className="state-container">
      <div className="state-icon">
        <Inbox size={24} />
      </div>

      <h3>{title}</h3>

      <p>{message}</p>
    </div>
  );
}

export default EmptyState;