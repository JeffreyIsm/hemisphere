import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useSidebar } from './SidebarContext'

function SideBar() {
    const { isOpen, setIsOpen } = useSidebar();

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('logo-sidebar');
            const button = document.querySelector('button[type="button"]');
            if (sidebar && !sidebar.contains(event.target) && !button?.contains(event.target)) {
                sidebar.classList.add('-translate-x-full');
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    const handleMouseLeave = () => {
        const sidebar = document.getElementById('logo-sidebar');
        if (sidebar) {
            sidebar.classList.add('-translate-x-full');
            setIsOpen(false);
        }
    };

    return (
        <>
            <div 
                id="backdrop" 
                className={`fixed inset-0 bg-gray-900 z-30 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-0 pointer-events-none'
                }`}
            />
            <aside 
                id="logo-sidebar" 
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 -translate-x-full" 
                aria-label="Sidebar"
                onMouseLeave={handleMouseLeave}
            >
                <div className="mt-15 h-full px-3 py-4 overflow-y-auto bg-hemi dark:bg-hemi">
                    <Link to='/' className="flex items-center ps-2.5 mb-5">
                        <img src="images/logotpcs.png" className="h-6 me-3 sm:h-15" alt="Flowbite Logo" />
                    </Link>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to='/about' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-200 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">ABOUT US</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/learn' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-200 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">LEARN</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/join' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-200 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">JOIN</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-200 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">PRODUCTS</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBar;