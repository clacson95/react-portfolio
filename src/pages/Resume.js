import { Center, Container } from "@chakra-ui/react";
import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Resume = () => {
    return(
        <Container>

            <Navigation />

            <Header />

            <Center>
                <h3>My resume is still a work in progress.</h3>
                <p>Keep a look out, I will be adding it soon. Thank you for your understanding.</p>
            </Center>

            <Footer />

        </Container>
    );
}

export default Resume;