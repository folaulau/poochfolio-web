import * as styled from './AuthFooter.styled';

export const AuthFooter = () => {
  return (
    <styled.Container>
      <styled.LeftWrapper>
        <styled.Text
          href="https://www.linkedin.com/company/poochfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Pooch Technologies Inc
        </styled.Text>
        <styled.Text
          href="https://www.linkedin.com/company/poochfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Poochfolio @ TM
        </styled.Text>
      </styled.LeftWrapper>
      <styled.RightWrapper>
        <styled.Text
          href="https://app.termly.io/document/privacy-policy/c20e24ba-36fe-40cc-879e-6c1a3143a5dc"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy | Terms of Use
        </styled.Text>
      </styled.RightWrapper>
    </styled.Container>
  )
}