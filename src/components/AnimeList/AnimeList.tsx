import Item from './Item'
import { StyledContainer } from './_AnimeList'
import { AnimeListInterface } from './types'

function AnimeList({ data }: AnimeListInterface) {
  return (
    <StyledContainer>
      {data.map(el => (
        <Item key={el.id} {...el} />
      ))}
    </StyledContainer>
  )
}

AnimeList.Item = Item

export default AnimeList
