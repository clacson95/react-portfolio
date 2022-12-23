import React from "react";
import { 
    ButtonGroup,
    Center, 
    HStack,
    IconButton,
    Image, 
    Text, 
    VStack 
} from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from "react-icons/gr";


const Project = () => {
    return(

        <Center>
            <VStack>
                <Image>
                    src= alt=
                </Image>
                <Text>

                </Text>
                <HStack>
                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href=""
                            aria-label="Deployed Application"
                            icon={<GrDeploy fontSize="1.25rem" />}
                        />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                
                    </ButtonGroup>
                </HStack>
            </VStack>
        </Center>

    );
}

export default Project;