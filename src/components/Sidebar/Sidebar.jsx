import { Link, Flex, Box, Avatar, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
        icon: <AiFillHome size={25} />,
        text: "Home",
        link: "/"
    },
    {
        icon: <SearchLogo />,
        text: "Search"
    },
    {
        icon: <NotificationsLogo />,
        text: "Notifications"
    },
    {
        icon: <CreatePostLogo />,
        text: "Create"
    },
    {
        icon: <Avatar size={"sm"} name="Victor Tsai" src="/profilepic.png" />,
        text: "Profile",
        link: "/asaprogrammer"
    }
  ]
  return (
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} position={"sticky"} top={0} left={0} py={8} px={{base:2, md: 4}}>
        <Flex direction={"column"} gap={10} w="full" height={"full"}>
            <Link as={RouterLink} to={"/"} pl={2} display={{base: "none", md:"block"}} cursor={"pointer"}>
                <InstagramLogo />
            </Link>
            <Link as={RouterLink} to={"/"} display={{base: "block", md: "none"}} p={2} w={10} cursor={"pointer"}
                borderRadius={6} _hover={{bg:"whiteAlpha.200"}}
            >
                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
                {sidebarItems.map((item, index) => {
                    return (
                        <Tooltip 
                            key={index}
                            hasArrow
                            label={item.text}
                            placement="right"
                            openDelay={500}
                            display={{base:'block', md:'none'}}
                            ml={1}
                        >
                            <Link 
                                to={item.link || null}
                                as={RouterLink} 
                                display={"flex"} 
                                gap={4} 
                                p={2} 
                                w={{base: "10", md:"full"}}
                                borderRadius={6}
                                alignItems={"center"}
                                _hover={{bg: "whiteAlpha.400"}}
                                justifyContent={{ base: "center", md: "flex-start" }}
                            >
                                {item.icon}
                                <Box display={{base: "none", md:"block"}}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    )
                })}
            </Flex>
            
            <Tooltip 
                hasArrow
                label={"Logout"}
                placement="right"
                openDelay={500}
                display={{base:'block', md:'none'}}
                ml={1}
            >
                <Link 
                    to={"auth"}
                    as={RouterLink} 
                    display={"flex"} 
                    gap={4} 
                    p={2} 
                    w={{base: "10", md:"full"}}
                    borderRadius={6}
                    alignItems={"center"}
                    _hover={{bg: "whiteAlpha.400"}}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    mt={"auto"}
                >
                    <BiLogOut size={25} />
                    <Box display={{base: "none", md:"block"}}>
                        Logout
                    </Box>
                </Link>
            </Tooltip>
        </Flex>
    </Box>
  )
}

export default Sidebar