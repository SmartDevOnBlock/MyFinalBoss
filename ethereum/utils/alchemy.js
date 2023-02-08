import {Alchemy, Network} from "alchemy-sdk";
const config = {
    apiKey: "wx3PDuj4KQN49JXE5czZ-HXP8zLs2E9K",
    network: Network.ETH_GOERLI,
  };
  const alchemy = new Alchemy(config);

  export default alchemy;