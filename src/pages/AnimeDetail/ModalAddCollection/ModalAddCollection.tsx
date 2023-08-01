import { Modal, Text, Input, Button } from "@components"

import { StyledForm, StyledExsitingCollection } from './_ModalAddCollection'
import useModalCollection from "./useModalAddCollection"
import type { ModalAddColletion } from "./type"

function ModalAddCollection({ isEnableExisting = true, handleClose, handleRefresh}: ModalAddColletion) {
  const {
    collectionName,
    handleChangeCollectionName,
    handleSubmit,
    getExistingAnime,
    handleAddToExistingCollection
  } = useModalCollection({ handleRefresh })

  return (
    <Modal handleClose={handleClose} title="Add Collection">
      <StyledForm>
        <Input isFullWidth value={collectionName} onChange={handleChangeCollectionName} />
        <Button onClick={handleSubmit}>
          <Text color="white">Add</Text>
        </Button>
      </StyledForm>
      {!!getExistingAnime.collection.length && isEnableExisting && (
        <>
          <Text>or Add to Existing Collection</Text>
          <StyledExsitingCollection>
            {getExistingAnime.collection.map((el, index) => (
              <Button variant="secondary" onClick={() => handleAddToExistingCollection(index)}>
                <Text color="white">{el?.name || '-'} ({el?.list?.length || 0})</Text>
              </Button>
            ))}
          </StyledExsitingCollection>
        </>
      )}
    </Modal>
  )
}

export default ModalAddCollection
