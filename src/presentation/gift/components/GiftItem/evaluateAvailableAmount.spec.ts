import { evaluateAvailableAmount } from './evaluateAvailableAmount';

describe('evaluateAvailableAmount', () => {
  test('`consumablePoint`に合わせて値を返せる', () => {
    expect(evaluateAvailableAmount({ consumablePoint: 102, price: 10, remaining: 10 })).toBe(10);
    expect(evaluateAvailableAmount({ consumablePoint: 66, price: 10, remaining: 10 })).toBe(6);
    expect(evaluateAvailableAmount({ consumablePoint: 11, price: 10, remaining: 10 })).toBe(1);
    expect(evaluateAvailableAmount({ consumablePoint: 9, price: 10, remaining: 10 })).toBe(0);
  });
  test('`remaining`に合わせて値を返せる', () => {
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 10, remaining: 10 })).toBe(10);
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 10, remaining: 5 })).toBe(5);
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 10, remaining: 0 })).toBe(0);
  });
  test('`price`に合わせて値を返せる', () => {
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 10, remaining: 100 })).toBe(100);
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 100, remaining: 100 })).toBe(10);
    expect(evaluateAvailableAmount({ consumablePoint: 1000, price: 1000, remaining: 100 })).toBe(1);
  });
});
