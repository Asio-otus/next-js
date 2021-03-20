import styled from 'styled-components';
import {Container} from "./layout/container";

export function Header() {
    return (
        <HeaderStyled >
            <Container>
                <div>
                    <img src="/images/logo.svg" alt="Sites logo"/>
                    <span>Next Movies</span>
                </div>
            </Container>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  background: ${({theme}) => theme.color.primary}; // Checking if theme is working
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`