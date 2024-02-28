import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See all
            </Text>
        </Flex>

        <SuggestedUser name={"Dan Wang"} followers={1392} avatar={"https://bit.ly/dan-abramov"} />
        <SuggestedUser name={"Ryan Florance"} followers={567} avatar={"https://bit.ly/ryan-florance"} />
        <SuggestedUser name={"Christian Chan"} followers={759} avatar={"https://bit.ly/code-beast"} />

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            2024 built by {" "}
            <Link href="https://www.google.com" target="_blank" color="blue.500" fontSize={14}>
            As a programmer
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers