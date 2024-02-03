import classes from './ProgramCard.module.css';

const ProgramCard = ({ WorkflowStages, Title, ProjectPhases }) => {
    return (
        <div className={classes.card}>
            <div className={classes.innerDiv}>
                <ul className={classes.workFlowStages}>
                    {WorkflowStages.map((item, index) => {
                        if (index === 0) {
                            return <li key={index}>{item}</li>;
                        }
                        return [
                            <li key={index}>
                                {' '}
                                <img
                                    src='./images/Ellipse.svg'
                                    alt=''
                                    key={index}
                                />
                            </li>,
                            <li key={index + 1}>{item}</li>
                        ];
                    })}
                </ul>
                <h4 className={classes.title}>{Title}</h4>
            </div>

            <ul className={classes.projectPhases}>
                {ProjectPhases.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default ProgramCard;
