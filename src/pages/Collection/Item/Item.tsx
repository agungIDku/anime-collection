import { Link } from "react-router-dom"

import { Text } from '@components'
import ImageNotFound from '@assets/image/no-image.jpeg'
import routeConst from "@constants/route"
import { IconTrash } from "@components/Icon"

import { StyledContainer, StyledImage, StyledTitle, StyledAction } from './_Item'
import type { AnimeCollectionItemInterface } from './type'
import useItem from "./useItem"

function Item({
  image,
  name,
  handleDelete
}: AnimeCollectionItemInterface) {
  const { handleRemove } = useItem()

  return (
    <StyledContainer>
      {!!handleDelete ? (
        <StyledImage src={image || ImageNotFound} alt={name} />
      ) : (
        <Link to={routeConst.COLLECTION_DETAIL.replace(':id', `${name}`)}>
          <StyledImage src={image || ImageNotFound} alt={name} />
        </Link>
      )}


      <StyledTitle className="desc">
        <Text color="primary" weight="semi-bold" lineHeight="18px">{name}</Text>
        <StyledAction>
          <IconTrash onClick={() => handleDelete ? handleDelete() : handleRemove(name)} />
        </StyledAction>
      </StyledTitle>
    </StyledContainer>
  )
}

export default Item
