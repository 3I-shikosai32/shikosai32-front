import Head from 'next/head';
import type { FC } from 'react';
import { resolveShareMessage } from '../ShareButton/resolveShareMessage';

// 他の箇所で`<meta>`を上書きしたいときに使う
export enum MetaKeys {
  VIEWPORT = 'viewport',
  TYPE = 'type',
  TITLE = 'title',
  DESCRIPTION = 'description',
  OGDESCRIPTION = 'ogDescription',
  IMAGE = 'image',
  TWITTER_CARD = 'twitterCard',
  TWITTER_CREATOR = 'twitterCreator',
}

export type CommonMetaProps = {
  title?: string;
};

export const CommonMeta: FC<CommonMetaProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key={MetaKeys.VIEWPORT} />
    <meta property="og:type" content="website" key={MetaKeys.TYPE} />
    <meta property="og:title" content={title} key={MetaKeys.TITLE} />
    <meta property="description" content={resolveShareMessage(new Date())} key={MetaKeys.DESCRIPTION} />
    <meta property="og:description" content={resolveShareMessage(new Date())} key={MetaKeys.OGDESCRIPTION} />
    <meta property="og:image" content="/ogp/ogp.png" key={MetaKeys.IMAGE} />
    <meta name="twitter:card" content="summary_large_image" key={MetaKeys.TWITTER_CARD} />
    <meta name="twitter:creator" content="3i_shikosai32" key={MetaKeys.TWITTER_CREATOR} />
  </Head>
);

CommonMeta.defaultProps = {
  title: 'OZ at 3I',
};
