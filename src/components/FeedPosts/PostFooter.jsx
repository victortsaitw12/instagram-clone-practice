import { Box, Flex, Text, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import {useState} from "react"
import {NotificationsLogo, UnlikeLogo, CommentLogo} from "../../assets/constants"

const PostFooter = ({username}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(600);

  const handleLikePost = () => {
    if(isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      <Text fontSize='sm' fontWeight={700}>
        {username}_{" "}
        <Text as='span' fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text fontSize='sm' color={"gray"} cursor={"pointer"}>
        View all 1000 comments
      </Text>
      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
  </Box>

  )
}

export default PostFooter