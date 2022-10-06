import styled from "styled-components";

export const TablePaginationContainer = styled.div`
  min-height: 52px;
  max-height: 52px;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  background-color: coral;
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  gap: 10px;
  padding-right: 10px;
`;

export const PaginationButton = styled.button<{ disabled: boolean }>`
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  border-width: 0.5px;
  background-color: ${props => props.disabled ? 'lightgrey' : 'darkseagreen'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const PaginationTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
