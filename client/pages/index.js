import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import uuid from 'react-uuid';
import { Progress, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';
import styled from "styled-components";
import alchemy from '../../ethereum/utils/alchemy';
import { useEffect, useState } from 'react';
import NFTImage from '../components/NFTImage';

const CollectionForm = styled(Segment)({
   
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const NFTforms = styled(Segment)({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
})


const contractAddress = "0x6A9124Deb551558e6f8f10FBeE8c8e08989774F6";


const Index = () => {


const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    try{
      const nfts = await alchemy.nft.getNftsForContract(contractAddress,{
        omitMetadata: true
      });

    // console.log(JSON.stringify(nfts, null, 2));
    const response = Object.values(nfts);
    setTotalMinted(response[0].length);

  }catch(error){
    console.error(error);
  }
};

    return ( <Layout>
        <Segment color="red">
        <h2 style={{textAlign: "center", color: "black"}}>Totally Minted</h2>
        <Progress value={totalMinted} total='50' progress='ratio' color='green' />
        </Segment>
        <CollectionForm inverted color="yellow">
        {Array(totalMinted+1)
        .fill(0)
        .map((_,i) => (
            <NFTforms color="red" key={uuid()}>
            <div key={i}>
            <NFTImage tokenId={i} getCount={getCount} />
            </div>
            </NFTforms>
        ))}
        </CollectionForm>
        </Layout> );
}
 
export default Index;