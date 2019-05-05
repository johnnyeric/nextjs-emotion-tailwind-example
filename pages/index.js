/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const green = css(tw`text-green-600`);
const Button = styled('button')`
  ${tw`font-mono text-sm text-red-600 hover:text-blue-200`};
`;

function Home() {
  return (
    <>
      <Global
        styles={css`
          body {
            ${tw`bg-gray-200 font-sans leading-normal tracking-normal`}
          }
        `}
      />
      <div>Welcome to Next.js + Emotion + Tailwind CSS!</div>
      <Button css={green}>Green Button</Button>
      <Button css={css`${green};${tw`uppercase`}`}>
        Uppercase Button
      </Button>
    </>
  );
}

export default Home;