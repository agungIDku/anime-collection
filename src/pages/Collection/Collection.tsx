import { Layout, Text, Button } from "@components"
import { AnimeCollectionProvider } from "@context/animeCollection"
import ModalAddCollection from "@pages/AnimeDetail/ModalAddCollection/ModalAddCollection"

import { StyledContainer, StyledHead, StyledContent } from './_Collection'
import useCollection from "./useCollection"
import Item from "./Item"

function Collection() {
  const { collection, handleToggleModal, isShowModal, handleRefresh } = useCollection()

  return (
    <>
      {isShowModal && (
        <ModalAddCollection
          handleClose={handleToggleModal}
          handleRefresh={handleRefresh}
          isEnableExisting={false}
        />
      )}
      <Layout>
        <StyledContainer>
          <StyledHead>
            <Text weight="semi-bold" variant="body1" color="primary">
              COLLECTION
            </Text>
            <Button onClick={handleToggleModal}>
              <Text color="white" weight="semi-bold">Create Colletion</Text>
            </Button>
          </StyledHead>
          <StyledContent>
            {!!collection.collection.length ? collection.collection.map(el => (
              <Item
                key={el.name}
                image={el.list?.[0]?.coverImage?.large}
                name={el.name}
              />
            )) : (
              <Text>There is no collection yet</Text>
            )}
          </StyledContent>
        </StyledContainer>
      </Layout>
    </>
  )
}

function ColletionProvider() {
  return (
    <AnimeCollectionProvider>
      <Collection />
    </AnimeCollectionProvider>
  )
}

export default ColletionProvider
