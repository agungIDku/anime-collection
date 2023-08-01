import { Layout, Text, Button } from "@components"
import { AnimeListDetailProvider } from "@context/animeListDetail"

import useAnimeDetail from "./useAnimeDetail"
import {
  StyledBanner,
  StyledCover,
  StyledContent,
  StyledAbout,
  StyledTagContainer,
  StyledTagItem,
  StyledContainerTags,
  StyledLeft,
  StyledCollection
} from "./_AnimeDetail"
import ModalAddCollection from "./ModalAddCollection"
import SkeletonLoading from "./Skeleton"

function AnimeDetail() {
  const { data, handleToggleModal, isShowModalCreate, getCollection, handleRefresh, loading } = useAnimeDetail()

  return (
    <>
      {isShowModalCreate && <ModalAddCollection handleClose={handleToggleModal} handleRefresh={handleRefresh} />}
      <Layout isFullWidth hasXSpace={false}>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            {data?.bannerImage && (
              <StyledBanner style={{ backgroundImage: `url(${data.bannerImage})`}} />
            )}
            <StyledContent>
              <StyledLeft anyBanner={!!data?.bannerImage}>
                <StyledCover src={data?.coverImage?.large} anyBanner={!!data?.bannerImage} />
                <Button onClick={handleToggleModal} isFullWidth>
                  <Text color="white" weight="semi-bold" align="center">Add to Collection</Text>
                </Button>
              </StyledLeft>
              <StyledAbout>
                <Text variant="h4" weight="semi-bold" color="white">{data?.title?.romaji || '-'}</Text>
                <Text color="white" variant="body1">
                  <div dangerouslySetInnerHTML={{__html: data?.description || '-'}} />
                </Text>
                {!!getCollection.length && (
                  <StyledCollection>
                    <Text variant="body1" color="white">Collection</Text>
                    <div>
                      {getCollection.map(el => (
                        <Button key={el} onClick={() => {}}>
                          <Text color="white">{el}</Text>
                        </Button>
                      ))}
                    </div>
                  </StyledCollection>
                )}

                <table>
                  <tr>
                    <td style={{ width: 250 }}>
                      <Text color="white" weight="semi-bold">Genres</Text>
                      <Text color="white">{data?.genres || '-'}</Text>
                    </td>
                    <td>
                      <Text color="white" weight="semi-bold">Format</Text>
                      <Text color="white">{data?.format || '-'}</Text>
                    </td>
                    <td>
                      <Text color="white" weight="semi-bold">Episodes</Text>
                      <Text color="white">{data?.episodes || '-'}</Text>
                    </td>
                    <td>
                      <Text color="white" weight="semi-bold">Duration</Text>
                      <Text color="white">{data?.duration || '-'}</Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: 250 }}>
                      <Text color="white" weight="semi-bold">Average Score</Text>
                      <Text color="success" weight="semi-bold">{data?.averageScore || '0'}%</Text>
                    </td>
                    <td>
                      <Text color="white" weight="semi-bold">Season</Text>
                      <Text color="white">
                        {data?.season}
                      </Text>
                    </td>
                    <td>
                      <Text color="white" weight="semi-bold">Popularity</Text>
                      <Text color="white">{data?.popularity || '-'}</Text>
                    </td>
                  </tr>
                </table>

                <StyledTagContainer>
                  <Text color="white" variant="body1">Tags</Text>
                  <StyledContainerTags>
                    {data?.tags?.map(el => (
                      <StyledTagItem key={el.id}>
                        <Text>{el.name}</Text>
                        <Text>{el.rank}%</Text>
                      </StyledTagItem>
                    ))}
                  </StyledContainerTags>
                </StyledTagContainer>
              </StyledAbout>
            </StyledContent>
          </>
        )}

      </Layout>
    </>

  )
}

function AnimeDetailProvider() {
  return (
    <AnimeListDetailProvider>
      <AnimeDetail />
    </AnimeListDetailProvider>
  )
}

export default AnimeDetailProvider
