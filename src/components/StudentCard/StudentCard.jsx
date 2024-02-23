import {useTranslation} from "react-i18next";
import classes from "./StudentCard.module.scss";

const StudentCard = ({isActive, AuthorName, Quote, imgPath, lastIndex}) => {
    const {t} = useTranslation();
    return (
        <div
            className={`${classes.block}  ${isActive ? classes.active : classes.disable} ${
                lastIndex ? classes.last : ""
            }`}
            style={{
                background: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className={classes.content}>
                <span className={classes.author}>{AuthorName}</span>
                <p className={classes.quote}>{Quote}</p>
                <button className={classes.buttonReview}>
                    <img src='./images/play_btn.svg' alt='' />
                    {t("watch-the-review")}
                </button>
            </div>
        </div>
    );
};

export default StudentCard;
