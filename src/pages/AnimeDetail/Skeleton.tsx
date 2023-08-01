import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { StyledContent, StyledLeft, StyledAbout } from './_AnimeDetail'

function SkeletonLoading() {
  return (
    <>
      <Skeleton width="100%" height={350} />
      <StyledContent>
        <StyledLeft anyBanner>
          <Skeleton width={200} height={150} />
          <Skeleton width={200} height={40} style={{ marginTop: 12 }} />
        </StyledLeft>
        <StyledAbout>
          <Skeleton width={200} height={18} />
          <Skeleton width={300} height={50} />
          <Skeleton width={200} height={18} />
        </StyledAbout>

      </StyledContent>
    </>
  )
}

export default SkeletonLoading
