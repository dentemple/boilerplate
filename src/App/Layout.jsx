import styled from "styled-components"

export const Display = styled.div`
  display: grid;
  grid-template-areas: "content";

  @media only screen and (min-width: ${props => props.theme.mobile}) {
    grid-template-areas: "content";
  }
`

export const Content = styled.section`
  grid-area: content;
`
