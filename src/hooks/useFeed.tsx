import { useQuery } from "@tanstack/react-query";

import requestsClass from "../services/requests.class";

export const useFeed = () => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: () => requestsClass.getFeed(),
    select: ({ data }) => data,
  });
};
