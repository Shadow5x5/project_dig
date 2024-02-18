import React from "react";
import classes from "./TariffCard.module.scss";

const TariffCard = ({
    Title,
    SubTitle,
    Price,
    Details,
    Description,
    SubDescription1,
    SubDescription2,
    TextButton,
    TextPopular,
    Index,
    Language,
}) => {
    // Combine styles based on conditions
    const combinedStyles = {
        headerSubTitle: {
            height: Language === "uz" ? "75px" : "45px",
        },
        cardContent: {
            borderRadius: Index === 3 ? "0px 0px 12px 12px" : "12px",
        },
    };

    return (
        <div className={classes.cardСontent} style={combinedStyles.cardContent}>
            {Index === 3 && <span className={classes.textPopular}>{TextPopular}</span>}
            <div className={classes.headerCard}>
                <h4 className={classes.titleCard}>{Title}</h4>
                <span className={classes.subTitleCard} style={combinedStyles.headerSubTitle}>
                    {SubTitle}
                </span>
                <span className={classes.priceCard}>{Price}</span>
            </div>
            <div className={classes.mainCard}>
                <span className={classes.detailsCard}>{Details}</span>
                <ul className={classes.ulDescription}>
                    {Description.map((item, index) => (
                        <li key={index}>
                            {item}
                            {SubDescription1 && (
                                <span className={classes.subDescription1}>{SubDescription1}</span>
                            )}
                        </li>
                    ))}
                </ul>
                {SubDescription2 && (
                    <span className={classes.subDescription2}>{SubDescription2}</span>
                )}
            </div>
            <button className={classes.button}>{TextButton}</button>
        </div>
    );
};

export default TariffCard;
