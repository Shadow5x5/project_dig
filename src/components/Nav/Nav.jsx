import LanguageToggle from '../LanguageToggle/LanguageToggle';
import classes from './Nav.module.css';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const [t] = useTranslation();
    return (
        <div className={classes.block}>
            <div>
                <img src='./images/logo.svg' alt='' />
            </div>
            <div>
                <ul className={classes.navlinks}>
                    <li>{t('nav-link-btn-1')}</li>
                    <li>{t('nav-link-btn-2')}</li>
                    <li>{t('nav-link-btn-3')}</li>
                    <li>{t('nav-link-btn-4')}</li>
                    <li>{t('nav-link-btn-5')}</li>
                </ul>
            </div>
            <LanguageToggle />
        </div>
    );
};

export default Nav;
