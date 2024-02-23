import classes from "./TariffBlock.module.scss";
import TariffCard from "./TariffCard/TariffCard";
import {useTranslation} from "react-i18next";
const TariffBlock = () => {
    const {t, i18n} = useTranslation();

    const numbers = [1, 2, 3, 4];
    return (
        <div className={classes.container}>
            <h2 className={classes.titleBlockTariff}>{t("tariffs-description")}</h2>
            <div className={classes.cards}>
                {numbers.map((n) => {
                    const getSubDescription = (suffix, language) => {
                        const key = `course-description-${n}-${suffix}`;
                        const translation = t(key);
                        return translation !== key && i18n.language === language
                            ? translation
                            : null;
                    };

                    return (
                        <TariffCard
                            key={n}
                            Title={t(`card-title-${n}`)}
                            SubTitle={t(`card-subtitle-${n}`)}
                            Price={t(`plan-price-${n}`)}
                            Details={t(`subscription-details-card-${n}`)}
                            Description={t(`course-description-${n}`)}
                            SubDescription1={getSubDescription("1", "ru")}
                            SubDescription2={getSubDescription("2", "uz")}
                            TextPopular={t("most-popular")}
                            Index={n}
                            TextButton={t("start-learning")}
                            Language={i18n.language}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TariffBlock;
