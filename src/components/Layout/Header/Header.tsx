import { FC } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@assets/image/logo.png'
import { Text } from '@components'
import routeConst from '@constants/route'

import { StyledContainer, StyledContent } from './_Header'

const Header: FC = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={Logo} height={64} alt="wolf logo" />
        <ul>
          <li>
            <Link to={routeConst.COLLECTION}>
              <Text color="white">Collection</Text>
            </Link>
          </li>
        </ul>
      </StyledContent>
    </StyledContainer>
  )
}

export default Header
