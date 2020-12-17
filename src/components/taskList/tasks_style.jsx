import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { MdDone } from "react-icons/md";
export const EmpetyListTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
  color: #ffd66b;
  font-family: "Noto Sans JP", sans-serif;
`;

export const PlusTask = styled(FaPlus)`
  font-size: 40px;
  color: #61b15a;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  margin: 10px;
`;

export const Done = styled(MdDone)`
  color: #61b15a;
  font-size: 40px;
`;

export const Incomplete = styled(Done)`
  color: gray;
`;

export const ContainerCheck = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
