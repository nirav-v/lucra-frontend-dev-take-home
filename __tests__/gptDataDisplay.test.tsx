import { expect, test } from 'vitest';
import { getByText, render, screen } from '@testing-library/react';

import { ReactQueryProvider } from '@/app/providers';

import GptDataDisplay from '@/components/GptDataDisplay';
import { UseQueryResult } from '@tanstack/react-query';

test('Gpt form renders correctly', () => {
  render(
    <ReactQueryProvider>
      <GptDataDisplay
        gptResponse={{ data: 'some mock data' } as UseQueryResult}
      />
    </ReactQueryProvider>
  );

  const formLabel = screen.getByRole('heading');
  console.log(formLabel);
  expect(formLabel).toBeDefined();
});
