import { createContext, useContext, useState } from 'react';

/*This context will hold information about whether the sidebar is open or closed.*/
const SidebarContext = createContext();

export function SidebarProvider({ children }) {

    /* This state can track sidebar visibility */
    /* We're creating a state called 'isopen' with initial value false */
    /* setIsOpen is a function to update the 'isopen'*/
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            if (!isOpen) {
                sidebar.classList.remove('-translate-x-full');
            } else {
                sidebar.classList.add('-translate-x-full');
            }
        }
    };

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
} 