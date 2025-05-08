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
                <div className="ml-4 mt-16 h-full px-3 py-16 overflow-y-auto bg-hemi-pink dark:bg-hemi-pink">
                    <ul className="space-y-0 text-sm tracking-widest font-inter">
                        <hr className="border-t-2 mb-4 ml-3.5 w-10"></hr>
                        <li>
                            <Link to='/' className="flex items-center p-0.5 text-gray-900 rounded-lg dark:text-black hover:text-white transition-all duration-300 ease-in-out">
                                <span className="flex-1 ms-3 whitespace-nowrap">HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className="flex items-center p-0.25 text-gray-900 rounded-lg dark:text-black hover:text-white transition-all duration-300 ease-in-out">
                                <span className="flex-1 ms-3 whitespace-nowrap">ABOUT</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/learn' className="flex items-center p-0.25 text-gray-900 rounded-lg dark:text-black hover:text-white transition-all duration-300 ease-in-out">
                                <span className="flex-1 ms-3 whitespace-nowrap">LEARN</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop' className="flex items-center p-0.25 text-gray-900 rounded-lg dark:text-black hover:text-white transition-all duration-300 ease-in-out">
                                <span className="flex-1 ms-3 whitespace-nowrap">SHOP</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/join' className="flex items-center p-0.25 text-gray-900 rounded-lg dark:text-black hover:text-white transition-all duration-300 ease-in-out">
                                <span className="flex-1 ms-3 whitespace-nowrap">JOIN US</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBar;