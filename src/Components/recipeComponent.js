import styled from 'styled-components';

export const RecipeListContainer = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 padding: 30px;
 gap: 20px;
 justify-content: space-evenly;
`;
export const RecipeContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
 width: 250px;
 box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
 height: 100px;
 object-fit: cover ;
`;
export const RecipeName = styled.span`
 font-size: 18px;
 font-weight: bold;
 color: black;
 margin: 10px 0;
`;
export const IngredientsText = styled.span`
 font-size: 15px;
 font-weight: bold;
 border: solid 1px green;
 color: black;
 cursor: pointer;
 padding: 10px 15px;
 border-radius: 4px;
 color: green;
 text-align: center;
 margin-bottom: 12px;
`;
export const SeeMoreText = styled(IngredientsText)`
 border: solid 1px #eb3300;
 color: #eb3300;
`;
