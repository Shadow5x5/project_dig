import classes from "./TeacherCard.module.css";
const TeacherCard = ({isActive, AuthorName, Quote, imgPath, lastIndex}) => {
    return (
        <div
            className={`${classes.block}  ${isActive ? classes.active : classes.disable}
            ${lastIndex ? classes.last : ""}`}
            style={{
                background: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className={classes.content}>
                <span className={classes.author}>{AuthorName}</span>
                <p className={classes.quote}>{Quote}</p>
            </div>
        </div>
    );
};

export default TeacherCard;
