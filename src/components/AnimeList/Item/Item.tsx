import { Link } from "react-router-dom"

import { AnimeItemInteface } from "@type/anime"
import { Text } from '@components'
import ImageNotFound from '@assets/image/no-image.jpeg'
import routeConst from "@constants/route"

import { StyledContainer, StyledImage, StyledTitle, StyledInfo } from './_Item'

function Item({
  coverImage,
  episodes,
  title: { romaji },
  averageScore,
  id
}: AnimeItemInteface) {
  return (
    <Link to={routeConst.ANIME_DETAIL.replace(':id', `${id}`)} style={{ position: 'relative' }}>
      <StyledContainer>
        <StyledImage src={coverImage.large || ImageNotFound} alt={romaji} />
        <StyledTitle className="desc">
          <StyledInfo>
            <Text variant="body3" color="success"  weight="bold">{`${averageScore}% Match`}</Text>
            <Text variant="body3" color="white" weight="semi-bold">{`${episodes} Episodes`}</Text>
          </StyledInfo>
          <Text color="primary" weight="semi-bold" lineHeight="18px">{romaji}</Text>
        </StyledTitle>
      </StyledContainer>
    </Link>
  )
}

export default Item
