import classes from "./Program.module.scss";
import {useTranslation} from "react-i18next";
import ProgramCard from "../ProgramCard/ProgramCard";
const Program = () => {
    const {t} = useTranslation();
    const numbers = [1, 2, 3, 4, 5];
    return (
        <>
            <div className={classes.container}>
                <h2 className={classes.h2Title}>{t("program-modules")}</h2>
                {numbers.map((number, index) => {
                    return (
                        <ProgramCard
                            WorkflowStages={t(`workflow-stages-${number}`, {returnObjects: true})}
                            Title={t(`accordion-title-${number}`)}
                            ProjectPhases={t(`project-phases-${number}`, {returnObjects: true})}
                            key={number}
                            Index={index + 1}
                            isFirst={index === 0}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Program;
