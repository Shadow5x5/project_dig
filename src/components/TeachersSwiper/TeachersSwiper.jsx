import classes from './TeachersSwiper.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TeacherCard from './../TeacherCard/TeacherCard';

const PAGE_WIDTH = 380;

const TeachersSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [t] = useTranslation();

    const baseImgPath = './images/Teacher_';

    const getBlockState = (index) => {
        if (
            index === activeIndex ||
            index === activeIndex + 1 ||
            index === activeIndex + 2
        ) {
            return true;
        }
        return false;
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, 1));
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (2 - 1));
            return Math.max(newOffset, maxOffset);
        });
    };
    const handlePrev = () => {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const renderBlocks = () => {
        const blocks = [];
        for (let i = 0; i < 4; i++) {
            const blockClass = getBlockState(i);
            blocks.push(
                <TeacherCard
                    key={i}
                    isActive={blockClass}
                    AuthorName={t(`testimonial-author-name-${i + 1}`)}
                    Quote={t(`testimonial-quote-${i + 1}`)}
                    imgPath={`${baseImgPath}${i + 1}.jpg`}
                />
            );
        }
        return blocks;
    };

    return (
        <div className={classes.container}>
            <div className={classes.slider}>
                <div
                    className={classes.block_slides}
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {renderBlocks()}
                </div>

                <button className={classes.btn_1} onClick={handlePrev}>
                    <img src='./images/up.svg' alt='' />
                </button>
                <button className={classes.btn_2} onClick={handleNext}>
                    <img src='./images/up.svg' alt='' />
                </button>
            </div>
        </div>
    );
};

export default TeachersSwiper;
