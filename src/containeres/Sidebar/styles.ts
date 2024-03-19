import styled from "styled-components";

export const Botaotema = styled.button`
background-color: ${(props) => props.theme.corPrincipal};
color: ${(props) => props.theme.corDefundo};
padding:8px;
border:none;
border-radius:10px;
margin-top:10px;
margin-bottom:10px;
cursor:pointer;
`

export const Sidebarcontainer = styled.div`
position:sticky;
top:80px;
left:0;

@media (max-width:768px){
  margin-bottom:40px;
  text-aling:center;
}
`
