import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr='4' textAlign='right'>
                <Text>Vinicius Vilar</Text>
                <Text color="gray.300" fontSize="small">
                            vilarvilarvinicius@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Vinícius Vilar"/>
        </Flex>
    );
}