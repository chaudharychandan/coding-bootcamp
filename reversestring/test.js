const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('a z i cd')).toEqual('dc i z a');
});

test('Reverse reverses a string', () => {
  expect(reverse('  a bc d')).toEqual('d cb a  ');
});
