import { useState, useEffect } from "react";
import { createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import admins from "../Admin/admins";

export const UserContext = createContext();
export const MobileContext = createContext();

export function AppProvider({ children }) {
    return (
        <UserProvider>
            <MobileProvider>
                {children}
            </MobileProvider>
        </UserProvider>
    );
}

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (admins.includes(currentUser.email)){
                    setIsAdmin(true);
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, isAdmin, loading }}>
            {!loading && children}
        </UserContext.Provider>
    );
}

function MobileProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
            if (isSidebarOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
    }, [isSidebarOpen]);

    function toggleSidebar(){
        setIsSidebarOpen((prev)=>!prev);
    }

    return (
        <MobileContext.Provider value={{isSidebarOpen, toggleSidebar}}>
            {children}
        </MobileContext.Provider>
    );
}
