import assert from 'assert';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { SearchComponent } from './index';

describe('Search', () => {
  it('should be able to render to an HTML string', () => {
    let htmlString = renderToString(<SearchComponent results={[]} />);
    assert.equal(typeof htmlString, 'string');
  });
});
