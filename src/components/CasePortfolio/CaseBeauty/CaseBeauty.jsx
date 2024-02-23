import classes from "./CaseBeauty.module.scss";

const CaseBeauty = () => {
    return (
        <div className={classes.container}>
            <div className={classes.item1}>
                <img src='/images/fashion_1.jpg' alt='' />
            </div>
            <div className={classes.item2}>
                <img src='/images/fashion_2.jpg' alt='' />
            </div>
            <div className={classes.item3}>
                <img src='/images/fashion_3.jpg' alt='' />
            </div>
            <div className={classes.item4}>
                <img src='/images/fashion_4.jpg' alt='' />
            </div>
            <div className={classes.item5}>
                <img src='/images/fashion_5.jpg' alt='' />
            </div>
        </div>
    );
};

export default CaseBeauty;
