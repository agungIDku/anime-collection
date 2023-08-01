import { Layout, AnimeList, Text, Pagination } from "@components"
import { home } from '@constants/config'

import useHome from "./useHome"
import { StyledContainer, StyledHead } from "./_Home"

function Home() {
  const { data, currentPage, loading } = useHome()
  return (
    <Layout>
      <StyledContainer>
        <StyledHead>
          <Text weight="semi-bold" variant="body1" color="primary">ALL TIME POPULAR</Text>
          <Pagination
            currentPage={currentPage}
            totalData={data.pageInfo.total}
            totalPerPage={home.listAnime.perPage}
            paramKey={home.listAnime.paramsPage}
          />
        </StyledHead>
        <AnimeList data={data.media} loading={loading} />
      </StyledContainer>
    </Layout>
  )
}

export default Home
