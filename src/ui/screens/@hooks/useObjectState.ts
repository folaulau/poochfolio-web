import { useCallback, useState } from 'react';

export const useObjectState = <T extends object>() => {
  const [data, setData] = useState<T>();

  const onSetData = useCallback(
    (newData?: Partial<T>) => setData((prev) => ({ ...(prev || ({} as T)), ...(newData || {}) })),
    []
  );

  const onClear = useCallback(() => setData({} as T), []);

  return [data, onSetData, onClear] as const;
};
