import { Button, Center } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
}

export const GoogleLoginButton = function ({ onClick }: Props) {
  return (
    <Center>
      <Button
        size="lg"
        width="full"
        mx="6"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        leftIcon={<img src="/google.svg" alt="google Logo" style={{ backgroundColor: 'white', padding: '8px' }} />}
        onClick={onClick}
      >
        Google 계정으로 시작하기
      </Button>
    </Center>
  );
};
