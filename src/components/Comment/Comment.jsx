import { Flex,  Text, Link, Avatar, 
} from "@chakra-ui/react"

const Comment = () => {
  return (
    <Flex gap={4}>
        <Link to={`/`}>
            <Avatar src={"/profilepic.png"} size={"sm"} />
        </Link>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={"center"}>
                <Link to={`/`}>
                    <Text fontWeight={"bold"} fontSize={12}>
                        {"asprogrammer"}
                    </Text>
                </Link>
                <Text fontSize={14}>{"123"}</Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>
                {"2020-01-01"}
            </Text>
        </Flex>
    </Flex>
  )
}

export default Comment