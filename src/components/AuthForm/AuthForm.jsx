import { Flex, Box, VStack, Image,  Text } from "@chakra-ui/react";
import {useState} from "react"
import GoogleAuth from "./GoogleAuth";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
        <Box padding={5} border={"1px solid gray"} borderRadius={4}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram"/>
                {isLogin ? <Login /> : <Signup />}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box h={1} flex={2} bg={"gray.400"} />
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box h={1} flex={2} bg={"gray.400"} />
                </Flex>
                <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}  />
            </VStack>
        </Box>
        <Box border={"1px solid gray"} padding={5} borderRadius={4}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Dont have an account" : "Already have an account"}
                </Box>
                <Box color={"blue.500"} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign Up" : "Log In"}
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default AuthForm