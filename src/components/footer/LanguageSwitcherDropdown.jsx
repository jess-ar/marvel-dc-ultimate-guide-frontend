import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSwitcherDropdown = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language)?.label || 'English';

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-xs hover:bg-red-600"
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                {currentLanguage}
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-40 mb-2 bg-gray-800 border border-gray-600 shadow-lg rounded-xs bottom-full">
                    <ul className="py-2">
                        {languages.map((lang) => (
                            <li key={lang.code} className="px-4 py-2 hover:bg-gray-700">
                                <button
                                    onClick={() => changeLanguage(lang.code)}
                                    className="flex items-center w-full text-sm text-left text-white"
                                >
                                    <input
                                        type="radio"
                                        name="language"
                                        checked={i18n.language === lang.code}
                                        readOnly
                                        className="mr-2"
                                    />
                                    {lang.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcherDropdown;