import styled from 'styled-components';
import {useRouter} from 'next/router';
import Link from 'next/link'

const HeaderNav = () => {
    const Router = useRouter();
  return (
    <HeaderNavWrapper>
        <Link href={"/"}><HeaderNavLinks active={Router.pathname == "/" ? true : false} >
            Campaigns
        </HeaderNavLinks></Link>
        <Link href={"/createcampaign"}><HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false} >
            Create Campaign
        </HeaderNavLinks></Link>
        <Link href={"/dashboard"}><HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false} >
            Dashboard
        </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.bgDiv};
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    height: 50%;
    border-radius: 10px;
`
const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Georgia';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`


export default HeaderNav