import React, { FC } from "react";

import { AppContainer } from "./AppStyle";

import { Table } from "./src/components";
import { fields } from "./src/constants";

export const App: FC = () => {
  return (
    <AppContainer>
      <h5>Тестовая задача</h5>

      <Table
        fields={fields}
      />
    </AppContainer>
  );
};
