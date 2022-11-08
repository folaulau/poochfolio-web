import { useCallback } from "react"
import { useObjectState } from "./useObjectState";

export type ChangeEvent = {
  target: {
    value?: string | number | boolean | [number, number];
    name?: string;
  }
}

export type ChangeEventHandler = (e: ChangeEvent) => void;

export const useInputState = <T extends object>() => {
  const [data, setData, clearData] = useObjectState<T>();

  const handleChange: ChangeEventHandler = useCallback((e) => {
    const { target } = e;

    if (target?.name) {
      setData({ [target.name as string]: target?.value } as Partial<T>);
    };
  }, [setData]);

  return [data, handleChange, clearData] as const;
};
