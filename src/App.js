import React from "react";
import GlobalStyles from "./components/GlobalStyles";

import Hero from "./hero/Hero";
import Header from "./header/Header";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header></Header>
            <Hero></Hero>
        </>
    );
};

export default App;
