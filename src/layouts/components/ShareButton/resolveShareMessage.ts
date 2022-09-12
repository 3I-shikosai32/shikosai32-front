import { isBefore, isAfter, isEqual } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

export enum ShareMessageVariant {
  BEFORE = 'before',
  DURING = 'during',
  AFTER = 'after',
  FALLBACK = 'fallback',
}

type ShareMessageRecord = Record<ShareMessageVariant, string>;

export const shareMessages: ShareMessageRecord = {
  [ShareMessageVariant.BEFORE]:
    'レクリエーションとインターネットの超融合！？3Iによる出し物「OZ」はマルチメディア教室で展開予定！茨香祭当日をお楽しみに！',
  [ShareMessageVariant.DURING]: 'レクリエーションとインターネットの超融合！？3Iによる出し物「OZ」がマルチメディア教室で展開中です！',
  [ShareMessageVariant.AFTER]: '3Iによる出し物「OZ」で遊んでくれてありがとう！また会う日まで！',
  [ShareMessageVariant.FALLBACK]: 'レクリエーションとインターネットの超融合！？3Iによる出し物「OZ」をみてみよう！',
};

const DAY1 = zonedTimeToUtc(new Date(2022, 10, 22, 0, 0, 0), 'Asia/Tokyo');
const DAY2 = zonedTimeToUtc(new Date(2022, 10, 23, 23, 59, 59), 'Asia/Tokyo');

export const resolveShareMessage = (date: Date): string => {
  if (isBefore(date, DAY1)) {
    return shareMessages[ShareMessageVariant.BEFORE];
  }
  if ((isAfter(date, DAY1) && isBefore(date, DAY2)) || isEqual(date, DAY1) || isEqual(date, DAY2)) {
    return shareMessages[ShareMessageVariant.DURING];
  }
  if (isAfter(date, DAY2)) {
    return shareMessages[ShareMessageVariant.AFTER];
  }
  return shareMessages[ShareMessageVariant.FALLBACK];
};
