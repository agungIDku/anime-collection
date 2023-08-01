import { Layout, Text } from '@components'
import Item from '@pages/Collection/Item'
import { AnimeCollectionProvider } from '@context/animeCollection'

import { StyledContainer, StyledHead, StyledContent } from '../Collection/_Collection'
import useCollectionDetail from './useCollectionDetail'

function ColletionDetail() {
  const { getAnimes, id, handleDelete } = useCollectionDetail()

  return (
    <Layout>
      <StyledContainer>
        <StyledHead>
          <Text weight="semi-bold" variant="body1" color="primary">
            COLLECTION - {id}
          </Text>
        </StyledHead>
        <StyledContent>
          {!!getAnimes?.list?.length ? getAnimes.list.map(el => (
            <Item
              key={el.id}
              image={el.coverImage.large}
              name={el.title.romaji}
              handleDelete={() => handleDelete(el.title.romaji, el.id)}
            />
          )) : (
            <Text>There is no anime yet in {id} collection</Text>
          )}
        </StyledContent>
      </StyledContainer>
    </Layout>
  )
}

function ColletionDetailProvider() {
  return (
    <AnimeCollectionProvider>
      <ColletionDetail />
    </AnimeCollectionProvider>
  )
}


export default ColletionDetailProvider
