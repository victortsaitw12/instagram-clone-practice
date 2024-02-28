import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const {loading, error, signup} = useSignUpWithEmailAndPassword()
  return (
    <>
        <Input type="email"
            placeholder="Email"
            fontSize={14}
            size={"sm"}
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})} />

        <Input type="text"
            placeholder="Username"
            fontSize={14}
            size={"sm"}
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})} />
        <Input type="text"
            placeholder="Full Name"
            fontSize={14}
            size={"sm"}
            value={inputs.fullname}
            onChange={(e) => setInputs({...inputs, fullname: e.target.value})} />

        <InputGroup>
            <Input type={showPassword ? "text" : "password"}
                placeholder="Password" 
                fontSize={14}
                size={"sm"}
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})} />
            <InputRightElement h="full">
                <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
            </InputRightElement>
        </InputGroup>

        {error && (
            <Alert status="error" fontSize={13} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
        )}

        <Button w={"full"} 
            colorScheme={"blue"} 
            size={"sm"} 
            fontSize={14} 
            isLoading={loading}
            onClick={()=>{signup(inputs)}}>
            Sign Up
        </Button>

    </>
  )
}

export default Signup