import React from "react";
import Swiper from "../Swiper/Swiper";
import StudentCard from "../StudentCard/StudentCard";
import classes from "./ResultsStudents.module.scss";
import {useTranslation} from "react-i18next";
const ResultsStudents = () => {
    const {t} = useTranslation();
    return (
        <div className={classes.container}>
            <div className={classes.blockText}>
                <h2 className={classes.titleResultsStudents}>{t("students-results")}</h2>
                <h3 className={classes.subTitleResultsStudents}>{t("alumni-stories")}</h3>
            </div>
            <Swiper
                Component={StudentCard}
                ImgPath='./images/Student_'
                Name='user-comment-name-'
                Quote='user-comment-'
                Width='400'
                Size='3'
                Height='560'
            />
        </div>
    );
};

export default ResultsStudents;
