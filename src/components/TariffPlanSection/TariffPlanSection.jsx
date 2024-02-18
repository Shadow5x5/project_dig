import TariffBlock from "../TariffBlock/TariffBlock";
import classes from "./TariffPlanSection.module.scss";

const TariffPlanSection = () => {
    return (
        <div className={classes.container}>
            <TariffBlock />
        </div>
    );
};

export default TariffPlanSection;
