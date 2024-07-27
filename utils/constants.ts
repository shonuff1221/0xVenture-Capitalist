import { createThirdwebClient, defineChain } from "thirdweb";
import { arbitrumSepolia } from "thirdweb/chains";
import { signLoginPayload } from "thirdweb/auth";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!; // this will be used on the client
const secretKey = process.env.THIRDWEB_SECRET_KEY!; // this will be used on the server-side

export const client = createThirdwebClient(
  secretKey ? { secretKey } : { clientId }
);

export const chain = arbitrumSepolia;
