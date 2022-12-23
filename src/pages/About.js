import React from "react";
import {
    Box,
    Container,
    Image,
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (

        <Container>

            <Navigation />

            <Header />

            <Image
                borderRadius="full"
                position="relative"
                top="3"
                bottom="3"
                left="8"
                mb={7}
                boxSize="150px"
                mr={14}
                src={require("../assets/Caleb.png")}
                alt="Caleb Lacson's bio picture"
            />

            <Box
                bg="#474e5d"
                w="100%"
                p="15px 0 0px 0"
                m="15px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <div className="about-section" align="left">
                    <h1>
                        <strong>About Me</strong>
                    </h1>
                    <br />
                    <p>
                        Short bio
                    </p>
                </div>
            </Box>

            <Footer />

        </Container>
    );
}

export default About;