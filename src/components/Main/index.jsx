import { Badge, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Hotel from "../hotel";

function Main() {

   const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
   }

   return (
      <Flex
         align='center'
         justify='center'
         display='flex'
      >
         <SimpleGrid
            columns={[2, null, 3]}
            spacing={5}
         >
            {/* Card contendo informações dos pacotes de viagem */}

            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />

         </SimpleGrid>
      </Flex>
   )
}
export default Main;
