import {useTranslation} from "react-i18next";

import classes from "./PopularQuestions.module.scss";
import Question from "./Question/Question";

const PopularQuestions = () => {
    const {t} = useTranslation();
    const numbers = [1, 2, 3, 4];
    return (
        <div className={classes.container} id="FAQ">
            <h2 className={classes.title}>{t("popular-questions")}</h2>
            <div className={classes.block}>
                {numbers.map((n) => {
                    return (
                        <Question
                            key={n}
                            Title={t(`question-card-${n}`)}
                            Answer={t(`answer-card-${n}`)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PopularQuestions;
