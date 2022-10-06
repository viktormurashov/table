import { DependencyList, useEffect } from 'react';

type AsyncCallback = () => Promise<unknown>;

export const useAsyncEffect = (
  asyncCallback: AsyncCallback,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    asyncCallback();
  }, deps);
};
