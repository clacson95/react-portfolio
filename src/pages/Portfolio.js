import {
    ButtonGroup,
    Center,
    Container,
    HStack,
    IconButton,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from "react-icons/gr";

// import project images
import Schedule from "../assets/schedule.png";
import Password from "../assets/password.png";
import Quiz from "../assets/quiz.png";
import Team from "../assets/team.png";
import Social from "../assets/social.png";
import Weather from "../assets/weather.png";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Portfolio = () => {
    return (
        <Container>

            <Navigation />      

            <Header />


            {/* portfolio grid */}
            <VStack>


                {/* row 1 */}
                <HStack>

                    {/* project 1 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Schedule} alt="scheduler" />
                            {/* project label */}
                            <Text> Work Day Scheduler</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://clacson95.github.io/work-day-scheduler/"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/work-day-scheduler"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>

                    {/* project 2 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Password} alt="password generator" />
                            {/* project label */}
                            <Text> Password Generator</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://clacson95.github.io/password-generator/"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/password-generator"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>
            
                </HStack>

                {/* row 2 */}
                <HStack>

                    {/* project 3 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Quiz} alt="coding quiz" />
                            {/* project label */}
                            <Text> Coding Quiz</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://clacson95.github.io/code-quiz/"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/code-quiz"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>

                    {/* project 4 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Team} alt="employee tracker" />
                            {/* project label */}
                            <Text> Employee Tracker</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://watch.screencastify.com/v/cxJoNtDCsNBkgKMQThk1"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/employee-tracker"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>
            
                </HStack>

                {/* row 3 */}
                <HStack>

                    {/* project 5 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Social} alt="social network API" />
                            {/* project label */}
                            <Text> Social Network API</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://www.youtube.com/watch?v=wmVHiRCeMTE&feature=youtu.be"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/nosql-social-network-api"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>

                    {/* project 6 */}
                    <Center>
                        <VStack>
                            {/* project image */}
                            <Image src={Weather} alt="weather dashboard" />
                            {/* project label */}
                            <Text> Weather Dashboard</Text>
                            {/* github deployment & repo */}
                            <HStack>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="https://clacson95.github.io/weather-api-dashboard/"
                                        aria-label="Deployed Application"
                                        icon={<GrDeploy fontSize="1.25rem" />}
                                    />
                                    <IconButton
                                        as="a"
                                        href="https://github.com/clacson95/weather-api-dashboard"
                                        aria-label="GitHub"
                                        icon={<FaGithub fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </HStack>
                        </VStack>
                    </Center>
            
                </HStack>

            </VStack>

            <Footer />

        </Container>
    );
}

export default Portfolio;