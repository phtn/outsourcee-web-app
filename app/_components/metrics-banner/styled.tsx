import tw from 'tailwind-styled-components'

const Container = tw.div`
  grid grid-cols-2 lg:grid-cols-4 mb-16 bg-primary-foreground
`

const Cell = tw.div`
  h-[150px] sm:h-[200px] md:h-[200px] flex items-center justify-center
`

const Item = tw.div`
  items-center flex flex-col
`

const Label = tw.h3`
  text-white text-[1rem] sm:text-[1.5rem] font-semibold mt-[-10px] sm:mt-[-16px]
`

const Value = tw.h1`
  text-white text-[2rem] sm:text-[2.6rem] font-extrabold
`

export { Container, Cell, Item, Label, Value }
