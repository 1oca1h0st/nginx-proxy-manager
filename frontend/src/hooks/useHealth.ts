import { useQuery } from "@tanstack/react-query";

import { getHealth, HealthResponse } from "src/api/npm";

const fetchHealth = () => getHealth();

const useHealth = (options = {}) => {
	return useQuery<HealthResponse, Error>({
		queryKey: ["health"],
		queryFn: fetchHealth,
		refetchOnWindowFocus: false,
		retry: 5,
		refetchInterval: 15 * 1000, // 15 seconds
		staleTime: 14 * 1000, // 14 seconds
		...options,
	});
};

export { fetchHealth, useHealth };
