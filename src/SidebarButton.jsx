import { useSidebar } from './SidebarContext';

function SidebarButton() {
    const { toggleSidebar } = useSidebar();

    return (
        <button 
            onMouseEnter={toggleSidebar}
            type="button" 
            className="fixed top-2 left-2 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-hemi-pink focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-hemi-pink dark:focus:ring-gray-600"
        >
            <span className="sr-only">Open sidebar</span>
            <img src="images/logotpcs.png" className="h-6 me-3 sm:h-10" alt="Flowbite Logo" />
        </button>


    );
}

export default SidebarButton; 