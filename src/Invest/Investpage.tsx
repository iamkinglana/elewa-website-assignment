import React from "react";
import Introduction from "./Introduction/Introduction";
import Footer from "./Top-Bottom/Footer/Footer";
import History from "./Keyfigures/Keyfigures";
import Elewa_nv from "./Elewa_nv/elwa_nv";
import Mission from "./Mission/mission";
import Howwe from "./Howwe/Howw";
import NavBar from "./Top-Bottom/Navbar/Navbar";


const Investpage: React.FC<{}> = () => {
    return (
        <div>
        <NavBar />
            <Introduction />
            <Howwe />
            <History />
            <Elewa_nv />

            <Mission />
            <Footer />
        </div>
    );
};

export default Investpage;
