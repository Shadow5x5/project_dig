import classes from "./MainPage.module.css";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Teachers from "../components/Teachers/Teachers";
import Program from "../components/Program/Program";
import TariffPlanSection from "../components/TariffPlanSection/TariffPlanSection";
import CasePortfolio from "../components/CasePortfolio/CasePortfolio";
import ResultsStudents from "../components/ResultsStudents/ResultsStudents";
import PopularQuestions from "../components/PopularQuestions/PopularQuestions";
import CourseRegistrationForm from "../components/CourseRegistrationForm/CourseRegistrationForm";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <Header />
            <About />
            <Teachers />
            <Program />
            <TariffPlanSection />
            <CasePortfolio />
            <ResultsStudents />
            <PopularQuestions />
            <CourseRegistrationForm />
            <Footer />
        </div>
    );
};

export default MainPage;
