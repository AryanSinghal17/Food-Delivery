import React from "react";
import Layout from "../components/Layouts/Layout";
import "../styles/HomeStyle.css";
import Section1 from "./Section1";
function Home(){
    return(
        <>
        <Layout>
            {/* <div>Home</div> */}
            <Section1></Section1>
        </Layout>
        </>
    );
}
export default Home;