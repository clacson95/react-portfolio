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
import Project from "../components/Project";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from "react-icons/gr";

// import project images
import Schedule from "../assets/schedule.png";
import Password from "../assets/password.png";
import Quiz from "../assets/quiz.png";
import Team from "../assets/team.png";
import Social from "../assets/social.png";
import Weather from "../assets/weather.png";


const Portfolio = () => {
    return (
        <Container>

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
                                        href=""
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
                    

                </HStack>

                <HStack>
                    <Project src={Quiz} alt="coding quiz" />
                    <Project src={Team} alt="employee tracker" />
                </HStack>

                <HStack>
                    <Project src={Social} alt="social network API" />
                    <Project src={Weather} alt="weather dashboard" />
                </HStack>

            </VStack>

        </Container>
    );
}

export default Portfolio;