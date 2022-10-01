import { Badge, Box, Button, ButtonGroup, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ViewIcon } from '@chakra-ui/icons'

function Hotel() {
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
      <>
         <Box maxW='sm' borderWidth='1px' borderColor="#222" borderRadius='lg' overflow='hidden' bg='whiteAlpha.900'>
            <Flex
               flexDir='column'
               align='center'
               justify='center'
               gap='1'
            >
               <Box>
                  <Image src={property.imageUrl} />
                  <Box p='3'>
                     <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                           New
                        </Badge>
                        <Box
                           color='gray.500'
                           fontWeight='semibold'
                           letterSpacing='wide'
                           fontSize='xs'
                           textTransform='uppercase'
                           ml='2'
                        >
                           {property.beds} beds &bull; {property.baths} baths
                        </Box>
                     </Box>
                     <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                     >
                        {property.title}
                     </Box>
                     <Box>
                        {property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                           / wk
                        </Box>
                     </Box>

                  </Box>
               </Box>
               <ButtonGroup colorScheme='teal' mb='0.5' pb='2'>
                  <Button colorScheme='messenger' leftIcon={<ViewIcon/>}>Buy</Button>
                  <Button>View Details</Button>
               </ButtonGroup>
            </Flex>
         </Box>
      </>
   )
}
export default Hotel;