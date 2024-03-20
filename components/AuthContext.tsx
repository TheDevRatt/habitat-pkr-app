/**
 * @file AuthContext.tsx
 * @description Provides authentication and role information to components using React context.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// Define a type for the AuthContext value
interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
}

// Provide an initial value matching the AuthContextType
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
});

/**
 * Component to provide authentication and role information to child components using React context
 * @param children - The child components to be wrapped by the AuthProvider.
 * @returns The AuthProvider component.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Fetch custom claims to check for admin status
        const idTokenResult = await user.getIdTokenResult();
        setIsAdmin(!!idTokenResult.claims.admin);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to access authentication and role information from AuthContext.
 * @returns The authentication and role information.
 */
export const useAuth = () => useContext(AuthContext);
