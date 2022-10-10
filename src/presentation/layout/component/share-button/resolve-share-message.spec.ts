import { zonedTimeToUtc } from 'date-fns-tz';
import { resolveShareMessage, ShareMessageVariant, shareMessages } from './resolve-share-message';

describe('resolveShareMessage', () => {
  test('開催前のメッセージを返せる', () => {
    const date = zonedTimeToUtc(new Date(2022, 10, 21, 23, 59, 59), 'Asia/Tokyo');
    expect(resolveShareMessage(date)).toBe(shareMessages[ShareMessageVariant.BEFORE]);
    const date2 = zonedTimeToUtc(new Date(2021, 10, 23, 0, 0, 0), 'Asia/Tokyo');
    expect(resolveShareMessage(date2)).toBe(shareMessages[ShareMessageVariant.BEFORE]);
  });
  test('開催中のメッセージを返せる', () => {
    const dateStart = zonedTimeToUtc(new Date(2022, 10, 22, 0, 0, 0), 'Asia/Tokyo');
    expect(resolveShareMessage(dateStart)).toBe(shareMessages[ShareMessageVariant.DURING]);
    const dateMid = zonedTimeToUtc(new Date(2022, 10, 23, 0, 0, 0), 'Asia/Tokyo');
    expect(resolveShareMessage(dateMid)).toBe(shareMessages[ShareMessageVariant.DURING]);
    const dateEnd = zonedTimeToUtc(new Date(2022, 10, 23, 23, 59, 59), 'Asia/Tokyo');
    expect(resolveShareMessage(dateEnd)).toBe(shareMessages[ShareMessageVariant.DURING]);
  });
  test('開催後のメッセージを返せる', () => {
    const date = zonedTimeToUtc(new Date(2022, 10, 24, 0, 0, 0), 'Asia/Tokyo');
    expect(resolveShareMessage(date)).toBe(shareMessages[ShareMessageVariant.AFTER]);
    const date2 = zonedTimeToUtc(new Date(2023, 10, 23, 0, 0, 0), 'Asia/Tokyo');
    expect(resolveShareMessage(date2)).toBe(shareMessages[ShareMessageVariant.AFTER]);
  });
});
