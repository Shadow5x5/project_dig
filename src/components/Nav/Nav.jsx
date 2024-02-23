import LanguageToggle from "../LanguageToggle/LanguageToggle";
import classes from "./Nav.module.css";
import {useTranslation} from "react-i18next";

const Nav = () => {
    const [t] = useTranslation();
    return (
        <div className={classes.block}>
            <div>
                <img src='./images/logo.svg' alt='' />
            </div>
            <div>
                <ul className={classes.navlinks}>
                    <li>
                        <a href='#about'>{t("nav-link-btn-1")}</a>
                    </li>
                    <li>
                        <a href='#spikers'>{t("nav-link-btn-2")}</a>
                    </li>
                    <li>
                        <a href='#form'>{t("nav-link-btn-5")}</a>
                    </li>
                    <li>
                        <a href='#case'>{t("nav-link-btn-3")}</a>
                    </li>
                    <li>
                        <a href='#FAQ'>{t("nav-link-btn-4")}</a>
                    </li>
                </ul>
            </div>
            <LanguageToggle />
        </div>
    );
};

export default Nav;
