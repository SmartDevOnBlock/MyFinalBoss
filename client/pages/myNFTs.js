import {  useEffect, useState } from "react";
import { Divider, Image, List, Progress, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import WalletBalance from "../components/WalletBalance";
import styled from "styled-components";

const HeroBlock = styled(Segment)({
  textAlign: "center",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
})

const Line = styled(List.Item)({
  marginBottom: "20px",
  marginTop: "10px"
})

const MyNFTs = () => {
  const [currentAccount, setCurrentAccount] = useState();

    useEffect(() => {
      (async () => {
        try{
          const WalletAddress = await ethereum.request({method:"eth_requestAccounts"});
          setCurrentAccount(WalletAddress[0]);
        }catch(error){
          console.error(error);
        }
      })();
    },[]);
    

    return (
    <Layout>
    <Segment color="red">
    <List divided verticalAlign='middle'>
    <Line>
      <Image avatar src="https://www.svgrepo.com/show/262820/wallet.svg"/>
      <List.Content>
        <List.Header >Wallet address: {currentAccount} </List.Header>
      </List.Content>
    </Line>
    <Line>
      <Image avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_UuzDWxRPM7MDMrUmiWdODkTVyvE8gHg3dEeCh3SCQCWNEF46zYkuk27hIh60RXYgpk&usqp=CAU" />
      <List.Content>
        <WalletBalance/>
      </List.Content>
    </Line>
    </List>
    </Segment>
    <Divider section />
    <HeroBlock color="red">
        <h2>FinalBoss NFT Collection</h2>
        <Image style={{width: "300px"}}  src="https://gateway.pinata.cloud/ipfs/QmVEFZbCb6rC2ZcrYUd3bVe37TqSKME3FZtBzDmubsqJHD/1.png"></Image>
        <h3>Description</h3>
        <p>This is my first ever collection, deployed and created by myself, which aims to be a start of my carrier in Web3.</p>
        </HeroBlock>
    </Layout>);
}
 
export default MyNFTs;