import tw from 'tailwind-styled-components'

const GridContainer = tw.div`
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 
  gap-x-2 gap-y-10
`

const Item = tw.div`
  flex items-center justify-center 
`

export { GridContainer, Item }
