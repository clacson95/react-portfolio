import React from "react";
import { 
    Center, 
    Container, 
    Text
} from "@chakra-ui/react";



const Header = () => {

    return (
        <Container width="100vh" centerContent>
          <Center
              p={3}
              bg={"#6b9e7c"}
              w="100%"
              m="40px 0 15px 0"
              borderRadius="lg"
              borderWidth="1px"
            >
              <Text>
                Caleb Lacson
              </Text>
            </Center>
        </Container>
      );

}


export default Header;