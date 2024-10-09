import { apiStartStory } from "@/app/api/start-story/func";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import dayjs from "dayjs";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // SSR에서는 클라이언트에서 즉시 refetch하는 것을 피하기 위해
        staleTime: 60 * 1000,
      },
    },
  });
  const todayDate = dayjs().format("YYYY-MM-DD");

  /**
   * 시작 이야기 prefetch
   */
  await queryClient.prefetchQuery({
    queryKey: ["state_story"],
    queryFn: () => apiStartStory.get({ date: todayDate }),
    retry: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Layout;
