import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Popconfirm } from "antd";
export const EmpetyListTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
  color: #ffd66b;
  font-family: "Noto Sans JP", sans-serif;
`;
export const PopUp = styled(Popconfirm)`
  position: absolute;
  z-index: 1;
`;
export const Close = styled(AiFillCloseCircle)`
  font-size: 25px;
  color: #f52d2d;

  :hover {
    cursor: pointer;
    color: #ee4f4f;
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
