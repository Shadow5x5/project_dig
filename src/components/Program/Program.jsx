import classes from './Program.module.css';
import { useTranslation } from 'react-i18next';
import ProgramCard from '../ProgramCard/ProgramCard';
const Program = () => {
    const {t} = useTranslation();
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className={classes.container}>
                <h2>{t('program-modules')}</h2>
                {numbers.map((number) => {
                    return <ProgramCard  WorkflowStages={t(`workflow-stages-${number}`, { returnObjects: true })} Title={t(`accordion-title-${number}`)} ProjectPhases={t(`project-phases-${number}`, { returnObjects: true })}  key={number} />;
                })}
            </div>
        </div>
    );
};

export default Program;
