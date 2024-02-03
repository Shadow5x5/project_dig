import classes from './Teachers.module.css';
import TeachersSwiper from '../TeachersSwiper/TeachersSwiper';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
    const [t] = useTranslation();
    return (
        <div className={classes.block}>
            <div className={classes.container}>
                <div className={classes.block_text}>
                    <h2 className={classes.h2_speakers}>{t('our-speakers')}</h2>
                    <p>{t('experience-sharing-content')}</p>
                </div>
            </div>

            <TeachersSwiper />
        </div>
    );
};

export default Teachers;
