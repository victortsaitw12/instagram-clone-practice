import { AvatarGroup, Avatar, Flex, VStack, Text, Button } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
        <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
            <Avatar src={"/profilepic.png"} alt='As a programmer logo' />
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex
                gap={4}
                direction={{ base: "column", sm: "row" }}
                justifyContent={{ base: "center", sm: "flex-start" }}
                alignItems={"center"}
                w={"full"}
            >
                <Text fontSize={{ base: "sm", md: "lg" }}>{"asprogrammer"}</Text>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button
                        bg={"white"}
                        color={"black"}
                        _hover={{ bg: "whiteAlpha.800" }}
                        size={{ base: "xs", md: "sm" }}
                    >
                        Edit Profile
                    </Button>
                </Flex>
                <Flex>
                    <Button
                        bg={"blue.500"}
                        color={"white"}
                        _hover={{ bg: "blue.600" }}
                        size={{ base: "xs", md: "sm" }}
                    >
                        Follow
                    </Button>
                </Flex>
            </Flex>


            <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
                <Text fontSize={{ base: "xs", md: "sm" }}>
                    <Text as='span' fontWeight={"bold"} mr={1}>
                        10
                    </Text>
                    Posts
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }}>
                    <Text as='span' fontWeight={"bold"} mr={1}>
                       20
                    </Text>
                    Followers
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }}>
                    <Text as='span' fontWeight={"bold"} mr={1}>
                        20
                    </Text>
                    Following
                </Text>
            </Flex>

            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                    {"asprogrammer tsai"}
                </Text>
            </Flex>
            <Text fontSize={"sm"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?
            </Text>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader