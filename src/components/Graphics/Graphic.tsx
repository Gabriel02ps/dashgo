import { Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo:0.3
    }
  }
}

const series =[
  {name: 'series1', data: [31,120,10,28,51,18,109]}
]

interface GrapichProps {
  name: string;
}


export default function Graphic({ name }: GrapichProps) {
  return (
    <Box
      padding={['6' , '8']}
      bg='gray.800'
      borderRadius={8}
      paddingBottom='4'
    >
      <Text fontSize='lg' mb='4'>{name}</Text>
      <Chart options={options} series={series} type='area' height={160}/>
    </Box>
  )
}
