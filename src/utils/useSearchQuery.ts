import { useMemo } from "react";

export const useSearchQuery = () => {
  const { search } = window.location;
  
  const params: any = useMemo(() => {
    const list = search?.slice(1)?.split('&');
    const query = {} as any;

    for (const item of list) {
      const [key, value] = item.split('=');
      query[key] = value;
    };

    return query;
  }, [search]);

  return params;
};
