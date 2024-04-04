'use client';
import React, { useState } from 'react';

import { Label } from './ui/label';
import { Button } from './ui/button';
import { fetchGptResponse } from '@/lib/fetchFunctions';
import GptDataDisplay from './GptDataDisplay';
import { useQuery } from '@tanstack/react-query';
import { Textarea } from './ui/textarea';

export default function GptForm() {
  // bind userQuery state to the form input below
  const [userQuery, setUserQuery] = useState('');
  const [error, setError] = useState('');
  // initialize gpt response variable which will become the result returned from useQuery when we fetch from the api
  let gptResponse = useQuery({
    queryKey: ['gptResponse'],
    queryFn: () => fetchGptResponse(userQuery),
    // keep this query idle until the user has submitted the form with a valid query
    enabled: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    // validate user inputs
    if (userQuery.length < 5 || userQuery.length > 250) {
      setError('Query must be between 5 and 250 characters long');
      return;
    }
    // run the fetching query above
    gptResponse.refetch();
    console.log(gptResponse);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center h-2/5 w-8/12 m-auto'>
        <Label aria-label='Ask your AI Assistant something'>
          Ask your AI Assistant something
        </Label>
        <Textarea
          value={userQuery}
          onChange={e => setUserQuery(e.target.value)}
          placeholder='enter any query here - e.g. what is the meaning of life?"'
          className='placeholder:italic placeholder:whitespace-pre-line m-4 h-32 md:h-16'
        />
        {/*  display error message if there is one */}
        {error ? (
          <p className='text-red-600 pb-5'>
            Error: <span className='font-bold'>{error}</span>
          </p>
        ) : null}
        {/*  disable submit button while current response being fetched */}
        <Button type='submit' disabled={gptResponse.isFetching}>
          send query
        </Button>
      </form>
      {/* TODO: move data display component or wrap in memo to prevent unnecessary re-renders */}
      <GptDataDisplay gptResponse={gptResponse} />
    </>
  );
}
