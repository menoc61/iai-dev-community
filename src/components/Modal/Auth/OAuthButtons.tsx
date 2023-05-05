/* eslint-disable jsx-a11y/alt-text */
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";
import { AuthError, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

type OAuthButtonsProps = {
  error: AuthError;
};


const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);

  // temp solution for login instead of using cloud function
  const createUserDocument = async (user: User) => {
    const userdocRef = doc(firestore,"users",user.uid);
    await setDoc(userdocRef,JSON.parse(JSON.stringify(user)));
  }
  useEffect(()=>{
    if(userCred){
      createUserDocument(userCred.user);
    }
  },[userCred]);
//

  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error?.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
