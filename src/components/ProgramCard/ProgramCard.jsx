import {useState} from "react";
import classes from "./ProgramCard.module.scss";
import classNames from "classnames";

const ProgramCard = ({WorkflowStages, Title, ProjectPhases, Index, isFirst}) => {
    const cardClass = classNames(classes.card, {[classes.firstCard]: isFirst});
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={cardClass}>
            <div
                className={`${classes.innerDiv} ${isExpanded ? classes.active : ""}`}
                onClick={() => setIsExpanded(!isExpanded)}>
                <ul className={classes.workFlowStages}>
                    {WorkflowStages.map((item, index) => {
                        if (index === 0) {
                            return <li key={index}>{item}</li>;
                        }
                        return [
                            <li key={index}>
                                {" "}
                                <img src='./images/Ellipse.svg' alt='' key={index} />
                            </li>,
                            <li key={index + 1}>{item}</li>,
                        ];
                    })}
                </ul>
                <div className={classes.titleButtonContainer}>
                    <h4 className={classes.title}>{Title}</h4>
                    <button
                        className={`${classes.animatedButton} ${
                            isExpanded ? classes.expanded : ""
                        }`}
                        onClick={() => setIsExpanded(!isExpanded)}></button>
                </div>
            </div>
            <div
                className={`${classes.blockProjectPhases} ${
                    isExpanded ? classes[`blockProjectPhasesActive${Index}`] : Index
                }`}>
                <ul
                    className={`${classes.projectPhases} ${classes[`projectPhases${Index}`]}  ${
                        isExpanded ? classes.projectPhasesActive : ""
                    }`}>
                    {ProjectPhases.map((item, index) => {
                        return <li key={index + 1}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProgramCard;
