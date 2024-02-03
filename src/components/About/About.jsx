import { useTranslation } from 'react-i18next';
import classes from './About.module.css';

const About = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div className={classes.container}>
            <div className={classes.about_text_block}>
                <p className={classes.about_text_1}>
                    {t('photography-opportunity-text.0')}
                    <span>{t('photography-opportunity-text.1')}</span>
                    {t('photography-opportunity-text.2')}
                    <span>{t('photography-opportunity-text.3')}</span>
                    {t('photography-opportunity-text.4')}
                    <span>{t('photography-opportunity-text.5')}</span>
                    {t('photography-opportunity-text.6')}
                    <span>{t('photography-opportunity-text.7')}</span>
                    {t('photography-opportunity-text.8')}
                </p>
                {currentLanguage === 'ru' ? (
                    <p className={classes.about_text_2}>
                        {t('photography-opportunity-text.9')}
                        <span>{t('photography-opportunity-text.10')}</span>
                        {t('photography-opportunity-text.11')}
                        <span>{t('photography-opportunity-text.12')}</span>
                        {t('photography-opportunity-text.13')}
                    </p>
                ) : (
                    <p className={classes.about_text_2}>
                        <span>{t('photography-opportunity-text.9')}</span>
                        {t('photography-opportunity-text.10')}
                        <span>{t('photography-opportunity-text.11')}</span>
                        {t('photography-opportunity-text.12')}
                        <span>{t('photography-opportunity-text.13')}</span>
                    </p>
                )}
            </div>
            <div className={classes.block}>
                <div className={classes.inner_block}>
                    <span>700+</span>
                    <span>{t('student-achievement-text')}</span>
                </div>
                <div className={classes.inner_block}>
                    <span>200+</span>
                    <span>{t('brand-collaboration-text')}</span>
                </div>
                <div className={classes.inner_block}>
                    <span>7+</span>
                    <span>{t('content-creation-countries')}</span>
                </div>
            </div>
        </div>
    );
};

export default About;
