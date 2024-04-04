import { expect, test } from 'vitest';
import { getByText, render, screen } from '@testing-library/react';

import { ReactQueryProvider } from '@/app/providers';
import GptForm from '@/components/GptForm';
import exp from 'constants';

test('Gpt form renders correctly', () => {
  render(
    <ReactQueryProvider>
      <GptForm />
    </ReactQueryProvider>
  );

  const formLabel = screen.getByLabelText(/ai/i);

  expect(formLabel).toBeDefined();
});
