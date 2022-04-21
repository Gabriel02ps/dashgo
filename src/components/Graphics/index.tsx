import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Graphic from "./Graphic";

export default function Graphics() {
  return (
  <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
    <Graphic name='Inscritos da semana'/>
    <Graphic name='Taxa de abertura'/>
  </SimpleGrid>
  )
}
