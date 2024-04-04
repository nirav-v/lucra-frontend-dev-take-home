import { expect, test } from 'vitest';
import { getByText, render, screen } from '@testing-library/react';
import Page from '../app/page';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryProvider, ThemeProvider } from '@/app/providers';

test('Page renders correctly', () => {
  render(
    <ReactQueryProvider>
      <Page />
    </ReactQueryProvider>
  );
  //   expect(screen.getByText('AI')).toBeDefined();
});
