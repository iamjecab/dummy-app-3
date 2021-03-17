import React from "react";
import GlobalStyles from "./components/GlobalStyles";

import Hero from "./hero/Hero";
import Header from "./header/Header";
import MainCard from "./maincard/MainCard";
import MainInfo from "./maininfo/MainInfo";
import News from "./news/News";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header></Header>
            <Hero></Hero>
            <MainCard></MainCard>
            <MainInfo></MainInfo>
            <News></News>
        </>
    );
};

export default App;
