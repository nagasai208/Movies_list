import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SearchInputBox = styled.input`
${tw`w-1/4 h-10 m-5 rounded-md bg-gray-300	`}`

const SearchMainDiv = styled.div`
${tw`flex flex-col p-5`}`

const FilterDiv = styled.div`
${tw`flex justify-end pr-5`}`

export { SearchInputBox, SearchMainDiv, FilterDiv }