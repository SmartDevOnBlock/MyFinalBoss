import { Button, Menu } from "semantic-ui-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [currentAddress, setCurrentAccount] = useState();
  const handleMetamaskClick = async () => {
    const {ethereum} = window;
    if(!ethereum) {
      alert("You don't have Metamask");
    }
    try{
    const accounts = await ethereum.request({method:"eth_requestAccounts"})
    setCurrentAccount(accounts[0]);
    } catch(error){
      console.error(error);
    }

  }
    return ( <Menu style={{marginTop:"20px"}}>

        <Link href="/myNFTs">
        <Menu.Item >
          About Collection
        </Menu.Item>
        </Link>

        <Link href="/">
        <Menu.Item >
          Mint Page
        </Menu.Item>
        </Link>


        <Menu.Item position="right">
        {!currentAddress ? <Button color="green" onClick={handleMetamaskClick}>Connect MetaMask</Button> :
        <Button color="yellow" onClick={handleMetamaskClick} >Connected</Button> }
        </Menu.Item>
        
      </Menu> );
}
 
export default Header;