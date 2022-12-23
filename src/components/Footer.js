import React from "react";
import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => (
  <Box
    bg="#6b9e7c"
  >
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}>

      <HStack>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/caleblacson/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton 
            as="a" 
            href="https://github.com/clacson95" 
            aria-label="GitHub" 
            icon={<FaGithub fontSize="1.25rem" />} />
        </ButtonGroup>
      </HStack>
    </Container>
  </Box>
);


export default Footer;