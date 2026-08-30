import qs from "query-string";

interface DeleteKeyFromQueryStringProps {
  params: string;
  queryKeys: string[];
}
export const formQueryString = ({
  params,
  key,
  value,
}: Record<string, string>) => {
  const searchQuery = qs.parse(params);

  searchQuery[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: searchQuery,
  });
};

export const deleteKeysFromQueryString = ({
  params,
  queryKeys,
}: DeleteKeyFromQueryStringProps) => {
  const searchQuery = qs.parse(params);

  queryKeys.forEach((key) => {
    delete searchQuery[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: searchQuery,
    },
    { skipNull: true },
  );
};
