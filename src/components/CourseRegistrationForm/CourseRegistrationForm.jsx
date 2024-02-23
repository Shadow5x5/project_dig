import {useTranslation} from "react-i18next";
import classes from "./CourseRegistrationForm.module.scss";
import {useState} from "react";
import React from "react";

const CourseRegistrationForm = () => {
    const {t} = useTranslation();
    const options = t("courseOptionsWithPrices", {returnObjects: true});
    const [value, setValue] = useState({course: options[0].course, price: options[0].price});
    const [isActive, setIsActive] = useState(false);
    const [checked, setChecked] = useState(false);
    function wrapTermsInSpans(text) {
        const terms = {
            "Пользовательским соглашением": (
                <span key={"text"} className={classes.selectedText}>
                    Пользовательским соглашением
                </span>
            ),
            "Политикой конфиденциальности": (
                <span key={"text2"} className={classes.selectedText}>
                    Политикой конфиденциальности
                </span>
            ),
        };
        const splitRegex = /(Пользовательским соглашением|Политикой конфиденциальности)/;
        const parts = text.split(splitRegex);
        return parts.map(
            (part, index) => terms[part] || <React.Fragment key={index}>{part}</React.Fragment>,
        );
    }
    return (
        <div className={classes.container} id="form">
            <div className={classes.block1}>
                <h2 className={classes.title}>{t("")}</h2>
                <div className={classes.blockInputs}>
                    <div className={classes.blockInput1}>
                        <label htmlFor='name' className={classes.label}>
                            {t("field_name_label")}
                        </label>
                        <input type='text' id='name' className={classes.input} />
                    </div>
                    <div className={classes.blockInput2}>
                        <label htmlFor='phone' className={classes.label}>
                            {t("field_phone_label")}
                        </label>
                        <input type='phone' id='phone' className={classes.input} />
                    </div>
                </div>
                <div className={classes.blockInput3}>
                    <span className={classes.label}>{t("field_course_label")}</span>
                    <div
                        className={`${classes.selectedCoursePrice} ${isActive ? classes.active : ""}`}
                        onClick={() => {
                            setIsActive(!isActive);
                        }}>
                        {value.course}
                        <img src='./images/Ellipse_white.svg' alt='' />
                        {value.price}
                    </div>
                    <ul className={`${classes.select} ${isActive ? classes.active : ""}`}>
                        {options.map((option) => {
                            return (
                                <li
                                    key={option.course}
                                    className={`${classes.option} ${
                                        option.course === value.course ? classes.active : ""
                                    }`}
                                    onClick={() => {
                                        setIsActive(!isActive);
                                        setValue(option);
                                    }}>
                                    <span>{option.course}</span>
                                    <img src='./images/Ellipse_white.svg' alt='' />
                                    <span>{option.price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button className={classes.button}>{t("start-learning-btn")}</button>
                <div
                    className={classes.blockCheckbox}
                    onClick={() => {
                        setChecked(!checked);
                    }}>
                    <span className={`${checked ? classes.active : ""} ${classes.checkBox}`}></span>
                    <span>{wrapTermsInSpans(t("agreement_confirmation_text"))}</span>
                </div>
            </div>
            <div className={classes.block2}>
                <p className={classes.text}>{t("mobigraphy_quote")}</p>
                <div className={classes.blockAuthor}>
                    <div className={classes.blockAuthorImg}>
                        <img src='./images/author.jpg' alt='' />
                    </div>
                    <div className={classes.blockAuthorText}>
                        <span>{t("quote_author_name")}</span>
                        <span>{t("author_position")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseRegistrationForm;
