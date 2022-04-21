import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems='center'>
      { showProfileData && (
        <Box marginRight='4' textAlign='right'>
        <Text>Gabriel Pereira</Text>
        <Text color='gray.300' fontSize='small'>
          gabriel02ps@gmail.com
        </Text>
      </Box>
      )}

      <Avatar size='md' name='Gabriel Pereira' src='https://github.com/gabriel02ps.png'/>
    </Flex>
  )
}
