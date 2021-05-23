import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SingleMovieMainDiv = styled.div`
${tw`bg-blue-200	 h-screen p-5`}`;

const Image = styled.img`
${tw` w-3/6 h-72`};
width:500px;
height:500px;`

const SingleMovieDiv = styled.div`
${tw`flex justify-around p-5`}
`

const MovieTitle = styled.h1`
${tw`h-44 text-center`}`

const DataDiv = styled.div`
${tw`w-1/2`}`

const Goback = styled.p`
${tw`text-yellow-800	`}`



export { SingleMovieMainDiv, Image, SingleMovieDiv, MovieTitle, DataDiv, Goback}