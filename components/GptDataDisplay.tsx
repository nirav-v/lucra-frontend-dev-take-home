'use client';
import Loading from '@/components/loading';
import { UseQueryResult } from '@tanstack/react-query';
import { ScrollArea } from './ui/scroll-area';

type GptDataDisplayProps = {
  gptResponse: UseQueryResult<any, Error> | undefined;
};

// render gpt response to UI
export default function GptDataDisplay({ gptResponse }: GptDataDisplayProps) {
  // placeholder to show before user has submitted query
  if (!gptResponse || gptResponse?.isPending)
    return <div className='text-center'>You results will show up here</div>;

  if (gptResponse.isFetching || gptResponse.isRefetching) return <Loading />;

  if (gptResponse.isError) return <div>sorry something went wrong..</div>;

  return (
    <>
      <h4 className='mb-4 text-sm text-center font-medium leading-none'>
        Your Definitive Answer
      </h4>
      <ScrollArea className='h-72 w-3/5 rounded-md border m-auto'>
        <div className='p-4'>{gptResponse.data.msg}</div>
      </ScrollArea>
    </>
  );
}
