import {useState} from "react";
import classes from "./Question.module.scss";

const Question = ({Title, Answer}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={classes.block}>
            <div className={classes.headerBlock} onClick={() => setIsActive(!isActive)}>
                <h4 className={classes.title}>{Title}</h4>
                <button className={`${classes.button} ${isActive ? classes.active : ""} `}>
                    <img src='./images/up.svg' alt='' />
                </button>
            </div>
            <div className={`${classes.blockAnswer} ${isActive ? classes.active : ""}`}>
                <p className={classes.answer}>{Answer}</p>
            </div>
        </div>
    );
};

export default Question;
