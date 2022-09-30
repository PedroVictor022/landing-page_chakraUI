import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

function Main() {
   return (
      <Flex
         align='center'
         justify='center'
      >
         <SimpleGrid
            columns={[2, null, 3]}
            spacing={5}
         >
            {/* Card contendo informações dos pacotes de viagem */}
         </SimpleGrid>
      </Flex>
   )
}
export default Main;