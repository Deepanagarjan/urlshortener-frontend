import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"; // Correct import for icons
// import React from "react";

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Flex align="center" justify="center">
                <Button size="lg" onClick={toggleColorMode} leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Flex>
        </div>
    );
};

export default Toggle;
