import { Flex, Text } from "@chakra-ui/react"

function Header() {
   return (
      <Flex
         align='center'
         justify='center'
         p='3'
         bg='purple.600'
         mb='2'
      >
         <Text
            fontSize="3xl"
            color="whiteAlpha.900"
            as='b'
         >Traveler Pack</Text>
      </Flex>
   )
}
export default Header;