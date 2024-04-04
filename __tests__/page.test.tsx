import { test } from 'vitest';
import { render } from '@testing-library/react';
import Page from '../app/page';
import { ReactQueryProvider } from '@/app/providers';

test('Page renders correctly', () => {
  render(
    <ReactQueryProvider>
      <Page />
    </ReactQueryProvider>
  );
});
