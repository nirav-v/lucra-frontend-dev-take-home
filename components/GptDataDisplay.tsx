'use client';
import Loading from '@/components/loading';
import { UseQueryResult } from '@tanstack/react-query';

type GptDataDisplayProps = {
  gptResponse: UseQueryResult<any, Error> | undefined;
};

// render gpt response to UI
export default function GptDataDisplay({ gptResponse }: GptDataDisplayProps) {
  console.log(gptResponse);
  // placeholder to show before user has submitted query
  if (!gptResponse || gptResponse?.isPending)
    return <div>You results will show up here</div>;

  if (gptResponse.isFetching || gptResponse.isRefetching) return <Loading />;

  if (gptResponse.isError) return <div>sorry something went wrong..</div>;

  return (
    <>
      <div>{gptResponse.data?.msg}</div>
    </>
  );
}
