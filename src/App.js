import React from "react";
import GlobalStyles from "./components/GlobalStyles";

import Hero from "./hero/Hero";
import Header from "./header/Header";
import MainCard from "./maincard/MainCard";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header></Header>
            <Hero></Hero>
            <MainCard></MainCard>
        </>
    );
};

export default App;
