import classes from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [t] = useTranslation();

    return (
        <div className={classes.block}>
            <div className={classes.container}>
                <h1 className={classes.header_title}>
                    {t('header-description.0')}
                    <span className={classes.orange}>{t('header-description.1')}</span><br/>
                    {t('header-description.2')}
                </h1>
                <p className={classes.header_paragraph}>{t('header-additional-text')}</p>
                <button className={classes.header_btn_orange}>{t('start-learning-btn')}</button>
            </div>
        </div>
    );
};

export default Header;
