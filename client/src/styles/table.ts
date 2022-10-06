import styled from 'styled-components';


type TableHeaderSortButtonProps = {
  sort: 'ASC' | 'DESC' | null;
  isSelected?: boolean;
};

export const TableHeaderSortButton = styled.button<TableHeaderSortButtonProps>`
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  font-size: 18px;
  background-color: white;
  border: 0px;

  &:after {
    content: "${({ sort }) => sort === 'DESC' ? "↓" : "↑"}";
  }
`;

type TableRowContainerProps = {
  width?: number;
  sortable?: boolean;
};

export const TableRowItemContainer = styled.div<TableRowContainerProps>`
  min-height: 52px;
  max-height: 52px;
  height: 52px;
  overflow: hidden;
  align-items: center;
  display: flex;
  width: ${({ width }) => width ? `${width}px` : '100%'};
  min-width: ${({ width }) => width ? `${width}px` : '100%'};
  max-width: ${({ width }) => width ? `${width}px` : '100%'};
  border-bottom: 1px solid #ccc;
  padding: 0 10px 0 10px;
  gap: 10px;

  &:hover ${TableHeaderSortButton} {
    opacity: 1;
    display: ${({ sortable }) => sortable === false ? 'none' : 'block'};
  }
`;
