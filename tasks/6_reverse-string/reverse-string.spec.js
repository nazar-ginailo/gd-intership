import {reverseString} from './reverse-string';

xdescribe('reverse-string', () => {
  test('reverseString("hello") should return a string.', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });

  test('everseString("hello") should become "olleh".', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverseString("Howdy") should become "ydwoH"', () => {
    expect(reverseString('Howdy')).toBe('ydwoH');
  });

  test('reverseString("Greetings from Earth") should return "htraE morf sgniteerG"', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });

  test('reverseString("foo bañana mañana") should return "anañam anañb oof"', () => {
    expect(reverseString('foo bañana mañana')).toBe('anañam anañab oof');
  });
});
