import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button, Segment } from "semantic-ui-react";
import Smeshariky from "../Smeshariky.json";
import provider from "../utils/provider";
import styled from "styled-components";

const ImgFrame = styled.img`
    border: 1px solid black;
`


function NFTImage({ tokenId, getCount }) {
    const contractAddress = "0x6A9124Deb551558e6f8f10FBeE8c8e08989774F6";

     const signer = provider.getSigner();
   
    const contract = new ethers.Contract(contractAddress, Smeshariky.abi, signer);
    const contentId = 'QmSMTAFYTfuQzw7X6LsqqCvRnWVyf2zAsDrpQjL9VC8Yjc';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
 
  
    const [isMinted, setIsMinted] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      getMintedStatus();
    }, [isMinted]);
  
    const getMintedStatus = async () => {
      const result = await contract.isContentOwned(metadataURI);
      setIsMinted(result);
    };
  
    const mintToken = async () => {
        try{
      setLoading(true);
      const connection = contract.connect(signer);
      const addr = connection.address;
    //   const trans = await contract.safeTransferFrom(contractAddress, addr,tokenId)
      const result = await contract.payToMint(addr, metadataURI, {
        value: ethers.utils.parseEther('0.01'),
      });
      
  
      await result.wait();
    //   await trans.wait();
      getMintedStatus();
      getCount();
    }catch(error){
        console.error(error);
    }finally{
        setLoading(false);
    }
    };
  
    async function getURI() {
      const uri = await contract.tokenURI(tokenId);
      alert(uri);
    }
    return (
      <div>
        <ImgFrame width={300} src={isMinted ? imageURI : 'https://www.cumbriaeducationtrust.org/wp-content/uploads/2016/01/placeholder.png'}></ImgFrame>
          <h5>ID #{tokenId}</h5>
          {!isMinted ? (
            <Button loading={isLoading} primary onClick={mintToken}>
              Mint
            </Button>
          ) : (
            <Button onClick={getURI}>
              Taken! Show URI
            </Button>
          )}
      </div>
    )
};

export default NFTImage;