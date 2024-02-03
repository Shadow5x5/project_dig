import { useState } from 'react';

import classes from './LanguageToggle.module.css';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const [language, setLanguage] = useState('RU');

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguage(language.toUpperCase());
    };
    return (
        <div className={classes.block}>
            <div
                className={classes.language_info}
                onClick={() => setOpen(!isOpen)}
            >
                <span>{language}</span>
                <button
                    className={`${classes.change_language_btn} ${
                        isOpen ? classes.active : ''
                    }`}
                >
                    <img src='./images/up.svg' alt='' />
                </button>
            </div>
            <ul
                className={`${classes.language_selector} ${
                    isOpen ? classes.active : ''
                }`}
            >
                <li
                    className={` ${language !== 'RU' ? classes.disable : ''}`}
                    onClick={() => {
                        changeLanguage('ru');
                    }}
                >
                    Русский
                </li>
                <li
                    className={`${language !== 'UZ' ? classes.disable : ''}`}
                    onClick={() => {
                        changeLanguage('uz');
                    }}
                >
                    O'zbek
                </li>
            </ul>
        </div>
    );
};

export default LanguageToggle;
