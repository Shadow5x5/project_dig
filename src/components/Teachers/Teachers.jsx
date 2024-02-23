import classes from "./Teachers.module.css";
import Swiper from "../Swiper/Swiper";
import {useTranslation} from "react-i18next";
import TeacherCard from "./../TeacherCard/TeacherCard";
const Teachers = () => {
    const [t] = useTranslation();
    return (
        <div className={classes.block} id="spikers">
            <div className={classes.container}>
                <div className={classes.block_text}>
                    <h2 className={classes.h2_speakers}>{t("our-speakers")}</h2>
                    <p>{t("experience-sharing-content")}</p>
                </div>
            </div>

            <Swiper
                Component={TeacherCard}
                ImgPath='./images/Teacher_'
                Name='testimonial-author-name-'
                Quote='testimonial-quote-'
            />
        </div>
    );
};

export default Teachers;
