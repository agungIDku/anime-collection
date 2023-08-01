import Item from './Item'
import { StyledContainer } from './_AnimeList'
import { AnimeListInterface } from './types'
import SkeletonLoading from './Skeleton'

function AnimeList({ data, loading }: AnimeListInterface) {
  return (
    <StyledContainer>
      {loading && <SkeletonLoading />}
      {data.map(el => (
        <Item key={el.id} {...el} />
      ))}
    </StyledContainer>
  )
}

AnimeList.Item = Item

export default AnimeList
