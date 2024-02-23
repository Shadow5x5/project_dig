import classes from "./Swiper.module.css";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Swiper = ({Component, ImgPath, Name, Quote, Width = "380", Size = "1", Height = "524"}) => {
    const PAGE_WIDTH = +Width;
    const N = 3 + +Size;
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(2);
    const [offset, setOffset] = useState(0);
    const [t] = useTranslation();
    const style = {
        height: Height + "px",
    };
    const baseImgPath = ImgPath;
    const getBlockState = (index) => {
        if (index === activeIndex || index === activeIndex + 1 || index === activeIndex + 2) {
            return true;
        }
        return false;
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.min(prevIndex + 1, N - 3);
            setLastIndex(newIndex + 2);
            return newIndex;
        });
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * +Size);
            return Math.max(newOffset, maxOffset);
        });
    };
    const handlePrev = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.max(prevIndex - 1, 0);
            setLastIndex(newIndex + 2);
            return newIndex;
        });
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const renderBlocks = () => {
        const blocks = [];
        for (let i = 0; i < N; i++) {
            const blockClass = getBlockState(i);
            blocks.push(
                <Component
                    key={i}
                    isActive={blockClass}
                    AuthorName={t(`${Name}${i + 1}`)}
                    Quote={t(`${Quote}${i + 1}`)}
                    imgPath={`${baseImgPath}${i + 1}.jpg`}
                    lastIndex={i === lastIndex}
                />,
            );
        }
        return blocks;
    };
    return (
        <div className={classes.container}>
            <div className={classes.slider} style={style}>
                <div
                    className={classes.block_slides}
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}>
                    {renderBlocks()}
                </div>

                {!(activeIndex === 0) && ( // This condition checks if it's not the last slide
                    <button
                        className={`${classes.btn_1} ${classes.buttonSwiper}`}
                        onClick={handlePrev}>
                        <img src='./images/up.svg' alt='' />
                    </button>
                )}
                {!(lastIndex === N - 1) && ( // This condition checks if it's not the last slide
                    <button
                        className={`${classes.btn_2} ${classes.buttonSwiper}`}
                        onClick={handleNext}>
                        <img src='./images/up.svg' alt='' />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Swiper;
