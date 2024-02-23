import classes from "./SelectionGuide.module.scss";

import ReactPlayer from "react-player";
import {useTranslation} from "react-i18next";
const SelectionGuide = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.container}>
            <h2 className={classes.titleGuide}>{t("choice-assistance")}</h2>
            <h3 className={classes.subTitleGuide}>{t("flexible-learning-setup")}</h3>
            <div className={classes.playerWrapper}>
                <ReactPlayer
                    className={classes.reactPlayer}
                    url='https://www.youtube.com/watch?v=8orpHF3Jvsg'
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
        </div>
    );
};

export default SelectionGuide;
