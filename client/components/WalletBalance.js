import { useState } from 'react';
import { ethers } from 'ethers';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';



function WalletBalance() {

    const [balance, setBalance] = useState();
    const [isLoading, setLoading] = useState(false);


    const getBalance = async () => {
        try{
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
        setLoading(true);
        }catch(error){
            console.error(error);
        }finally {
            setLoading(false);
        }
    };
  
    return (
      <div>
          <h4 style={{marginTop: "20px"}}>Your ETH Balance: {balance}</h4>
          <Button style={{marginLeft: "30px"}} loading={isLoading}  primary onClick={() => getBalance()}>Show My Balance</Button>
      </div>
    );
  };
  
  export default WalletBalance;