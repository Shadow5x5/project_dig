import {useTranslation} from "react-i18next";
import classes from "./Footer.module.scss";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className={classes.container}>
            <div className={classes.block1}>
                <div>
                    <img src='./images/logo.svg' alt='' />
                </div>
                <ul className={classes.blockLinks}>
                    <li>{t("footer-link-btn-1")}</li>
                    <li>{t("footer-link-btn-2")}</li>
                    <li>{t("footer-link-btn-3")}</li>
                    <li>{t("footer-link-btn-4")}</li>
                    <li>{t("footer-link-btn-5")}</li>
                </ul>
                <div className={classes.blockImages}>
                    <div>
                        <img src='./images/telegram.svg' alt='' />
                    </div>
                    <div>
                        <img src='./images/instagram.svg' alt='' />
                    </div>
                    <div>
                        <img src='./images/youtube.svg' alt='' />
                    </div>
                </div>
            </div>
            <div className={classes.block2}>
                <span>{t("privacy-policy")}</span>
                <span>{t("designer")}</span>
            </div>
        </div>
    );
};

export default Footer;
