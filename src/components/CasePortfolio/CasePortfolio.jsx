import classes from "./CasePortfolio.module.scss";
import {useTranslation} from "react-i18next";
import {useState} from "react";

import CaseEvents from "./CaseEvents/CaseEvents";
import CaseFashion from "./CaseFashion/CaseFashion";
import CaseBeauty from "./CaseBeauty/CaseBeauty";
import CaseAuto from "./CaseAuto/CaseAuto";

const CasePortfolio = () => {
    const {t} = useTranslation();
    const buttons = t("multi-theme-buttons", {returnObjects: true});

    const [activeComponent, setActiveComponent] = useState(0);

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 0:
                return <CaseFashion />;
            case 1:
                return <CaseEvents />;
            case 2:
                return <CaseBeauty />;
            case 3:
                return <CaseAuto />;
            default:
                return <CaseFashion />;
        }
    };

    return (
        <div className={classes.container} id="case">
            <h2 className={classes.titleCasePortfolio}>{t("our-cases")}</h2>
            <div className={classes.blockButtons}>
                {buttons.map((item, index) => {
                    return (
                        <button
                            key={item}
                            onClick={() => handleButtonClick(index)}
                            className={`${activeComponent === index ? classes.active : ""}`}>
                            {item}
                        </button>
                    );
                })}
            </div>
            {renderComponent()}
        </div>
    );
};

export default CasePortfolio;
