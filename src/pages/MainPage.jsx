import classes from "./MainPage.module.css";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Teachers from "../components/Teachers/Teachers";
import Program from "../components/Program/Program";
import TariffPlanSection from "../components/TariffPlanSection/TariffPlanSection";
const MainPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <Header />
            <About />
            <Teachers />
            <Program />
            <TariffPlanSection />
        </div>
    );
};

export default MainPage;
