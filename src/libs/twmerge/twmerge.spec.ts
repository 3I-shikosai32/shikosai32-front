import twMerge, { isGradientName } from '.';

describe('twMerge', () => {
  it('独自クラス"shadow-z*"の対立を解決できる', () => {
    expect(twMerge('shadow-z4 shadow-z8')).toBe('shadow-z8');
    expect(twMerge('shadow-xl shadow-z8')).toBe('shadow-z8');
  });
  it('独自クラス"gradient-*"の対立を解決できる', () => {
    expect(twMerge('gradient-primary gradient-game')).toBe('gradient-game');
  });
  it('独自クラス"rounded-base"の対立を解決できる', () => {
    expect(twMerge('rounded-base rounded-3xl')).toBe('rounded-3xl');
  });
  it('isGradientName()がグラデーション名を識別できる', () => {
    expect(isGradientName('primary')).toBe(true);
  });
});
