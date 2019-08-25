import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';

import '../src/index.css';

// function loadStories() {
//   require('../src/stories');
// }

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
