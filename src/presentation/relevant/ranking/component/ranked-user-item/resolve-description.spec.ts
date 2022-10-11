import { resolveDescription } from './resolve-description';

describe('resolveDescription', () => {
  it('順位をもとに正しく説明の振り分けができる', () => {
    expect(resolveDescription({ place: 1, point: 100 })).toBe('100 Pt を我が物とし栄冠を戴くのは...');
    expect(resolveDescription({ place: 2, point: 100 })).toBe('100 Pt を勝ち取り、異彩を解き放つ！');
    expect(resolveDescription({ place: 3, point: 100 })).toBe('100 Pt を集めた遊びの達人');
    expect(resolveDescription({ place: 4, point: 100 })).toBe('100 Pt');
  });
  it('ポイントをもとに正しく出力される', () => {
    expect(resolveDescription({ place: 4, point: 100 })).toBe('100 Pt');
    expect(resolveDescription({ place: 4, point: 75 })).toBe('75 Pt');
    expect(resolveDescription({ place: 4, point: 50 })).toBe('50 Pt');
    expect(resolveDescription({ place: 4, point: 25 })).toBe('25 Pt');
  });
});
