import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  Plus,
  Users,
  X,
} from "lucide-react";

const initialWorkspaces = [
  {
    id: "teamflow",
    name: "TeamFlow",
    description: "TeamFlow product development",
    members: 24,
    initials: "TF",
  },
  {
    id: "development",
    name: "Development",
    description: "Engineering and technical collaboration",
    members: 12,
    initials: "DV",
  },
  {
    id: "college",
    name: "College Project",
    description: "Academic project collaboration",
    members: 8,
    initials: "CP",
  },
];

function WorkspaceSelection() {
    const navigate = useNavigate();
  const [workspaces, setWorkspaces] =
    useState(initialWorkspaces);

  const [selectedWorkspace, setSelectedWorkspace] =
    useState(initialWorkspaces[0].id);

  const [showCreateModal, setShowCreateModal] =
    useState(false);

  const [workspaceName, setWorkspaceName] =
    useState("");

  const handleCreateWorkspace = (event) => {
    event.preventDefault();

    const trimmedName = workspaceName.trim();

    if (!trimmedName) {
      return;
    }

    const newWorkspace = {
      id: `workspace-${Date.now()}`,
      name: trimmedName,
      description: "New TeamFlow workspace",
      members: 1,
      initials: trimmedName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    };

    setWorkspaces((current) => [
      ...current,
      newWorkspace,
    ]);

    setSelectedWorkspace(newWorkspace.id);
    setWorkspaceName("");
    setShowCreateModal(false);
  };

  return (
    <div className="workspace-selection-page">
      <div className="workspace-selection-brand">
        <div className="workspace-selection-logo">
          <Building2 size={22} />
        </div>

        <span>TeamFlow</span>
      </div>

      <div className="workspace-selection-card">
        <div className="workspace-selection-heading">
          <span className="eyebrow">
            YOUR WORKSPACES
          </span>

          <h1>Choose a workspace</h1>

          <p>
            Select the workspace you want to continue
            working in.
          </p>
        </div>

        <div className="workspace-list">
          {workspaces.map((workspace) => {
            const isSelected =
              selectedWorkspace === workspace.id;

            return (
              <button
                key={workspace.id}
                type="button"
                className={`workspace-option ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() =>
                  setSelectedWorkspace(workspace.id)
                }
              >
                <div className="workspace-option-logo">
                  {workspace.initials}
                </div>

                <div className="workspace-option-content">
                  <strong>{workspace.name}</strong>

                  <span>
                    {workspace.description}
                  </span>

                  <small>
                    <Users size={13} />
                    {workspace.members} members
                  </small>
                </div>

                <div className="workspace-check">
                  {isSelected && <Check size={17} />}
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="create-workspace-button"
          onClick={() => setShowCreateModal(true)}
        >
          <Plus size={17} />
          Create a new workspace
        </button>

        <button
          type="button"
          className="continue-workspace-button"
          onClick={() => navigate("/dashboard")}
        >
          Continue
          <ArrowRight size={17} />
        </button>
      </div>

      <p className="workspace-selection-footer">
        TeamFlow Prototype · Choose your workspace
      </p>

      {showCreateModal && (
        <div className="modal-overlay">
          <div className="workspace-modal">
            <div className="modal-header">
              <div>
                <span className="eyebrow">
                  WORKSPACE
                </span>

                <h2>Create workspace</h2>
              </div>

              <button
                type="button"
                className="icon-button"
                onClick={() =>
                  setShowCreateModal(false)
                }
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleCreateWorkspace}>
              <div className="form-group">
                <label htmlFor="workspace-name">
                  Workspace name
                </label>

                <input
                  id="workspace-name"
                  className="workspace-name-input"
                  type="text"
                  placeholder="e.g. Marketing Team"
                  value={workspaceName}
                  onChange={(event) =>
                    setWorkspaceName(event.target.value)
                  }
                  autoFocus
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-submit"
              >
                Create workspace
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkspaceSelection;