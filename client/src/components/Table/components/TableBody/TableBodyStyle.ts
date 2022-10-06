import styled from "styled-components";

export const TableBodyContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    height: 260px;
`;

export const TableRowText = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const TableRowContainer = styled.div`
    display: flex;
    min-height: 52px;
    max-height: 52px;
    height: 52px;
`;

export const EmptyTableContainer = styled.div`
    height: 260px;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
`;
