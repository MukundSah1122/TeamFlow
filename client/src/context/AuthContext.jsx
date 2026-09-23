import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "teamflow_user";
const SESSION_KEY = "teamflow_session";

const DEMO_USER = {
  id: "user-001",
  name: "Mukund Sah",
  email: "mukund@teamflow.dev",
  password: "TeamFlow@123",
  role: "Admin",
  initials: "MS",
};

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEY);

    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const hasSession = localStorage.getItem(SESSION_KEY);

    if (!hasSession) {
      return null;
    }

    return getStoredUser();
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      localStorage.setItem(SESSION_KEY, "true");
    }
  }, [user]);

const register = ({ name, email, password }) => {
  const newUser = {
    name,
    email,
    password,
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(newUser)
  );

  return {
    success: true,
    message: "Registration successful",
  };
};
  const login = ({ email, password }) => {
    const storedUser = getStoredUser();

    const userToCheck =
      storedUser || DEMO_USER;

    if (
      email === userToCheck.email &&
      password === userToCheck.password
    ) {
      setUser(userToCheck);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(userToCheck)
      );

      localStorage.setItem(SESSION_KEY, "true");

      return {
        success: true,
        user: userToCheck,
      };
    }

    return {
      success: false,
      message: "Invalid email or password.",
    };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;