'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { fetchGptResponse } from '@/lib/fetchFunctions';
import GptDataDisplay from './GptDataDisplay';
import { useQuery } from '@tanstack/react-query';

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
    // run the fetching query above
    gptResponse.refetch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label htmlFor='query'> Ask the AI model something</Label>
        <Input
          type='text'
          value={userQuery}
          onChange={e => setUserQuery(e.target.value)}
          placeholder='enter your query here - e.g. "give me a healthy but delicious recipe for a single man watching netflix"'
        />
        <Button type='submit'>send query</Button>
      </form>
      <GptDataDisplay gptResponse={gptResponse} />
    </>
  );
}
