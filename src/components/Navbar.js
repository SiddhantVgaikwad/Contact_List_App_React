import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext  from '../ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    
                    <div className="flex items-center">
                      
                        <Link
                            to="/"
                            className={`flex-shrink-0 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} no-underline`}
                        >
                            <svg
                                className="h-8 w-8 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="text-xl font-semibold">ContactApp</span>
                        </Link>
                    </div>

                   
                    <div className="flex items-center space-x-4">
                     
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'light' ? (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Add Contact button */}
                        <Link
                            to="/add"
                            className={`no-underline ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-md text-sm font-medium transition-colors`}
                        >
                            Add Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
