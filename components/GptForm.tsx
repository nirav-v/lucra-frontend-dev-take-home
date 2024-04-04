'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { fetchGptResponse } from '@/lib/fetchFunctions';
import GptDataDisplay from './GptDataDisplay';
import { useQuery } from '@tanstack/react-query';
import { Textarea } from './ui/textarea';

export default function GptForm() {
  // bind userQuery state to the form input below
  const [userQuery, setUserQuery] = useState('');
  // initialize gpt response variable which will become the result returned from useQuery when we fetch from the api
  let gptResponse = useQuery({
    queryKey: ['gptResponse'],
    queryFn: () => fetchGptResponse(userQuery),
    // keep this query idle until the user has submitted the form with a valid query
    enabled: false,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: validate user inputs

    // run the fetching query above
    gptResponse.refetch();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center h-2/5 w-8/12 m-auto'>
        <Label htmlFor='query'> Ask your AI Assistant something</Label>
        <Textarea
          value={userQuery}
          onChange={e => setUserQuery(e.target.value)}
          placeholder='enter any query here - e.g. how can I maintain a healthy lifestyle while having an active social life"'
          className='placeholder:italic placeholder:whitespace-pre-line m-4 h-32 md:h-16'
        />
        <Button type='submit'>send query</Button>
      </form>
      <GptDataDisplay gptResponse={gptResponse} />
    </>
  );
}
