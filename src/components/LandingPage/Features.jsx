import Feature from './Feature';
import styles from './Features.module.css';
import {
  ArticleNyTimes,
  Barcode,
  Chats,
  MaskHappy,
} from '@phosphor-icons/react';

const size = 36;
const color = '#91a7ff';
const featureContent = [
  {
    key: 1,
    title: 'Context Analysis',
    desc: 'Through sophisticated algorithms, the application allows for a detailed examination of material content. Users can discover the precise content of audio or audio-visual files without the need for playback',
    icon: <Chats size={size} color={color} />
  },
  {
    key: 2,
    title: 'Text Summaries',
    desc: 'The application automatically generates concise summaries of material content, providing an ideal tool for those in need of a quick overview, saving time and energy',
    icon: <ArticleNyTimes size={size} color={color} />
  },
  {
    key: 3,
    title: 'Sentiment Analysis',
    desc: 'WhatTheyMean can determine the sentiment or mood of the author during recording, whether positive, negative, or neutral. The application provides comprehensive emotional tonal information',
    icon: <MaskHappy size={size} color={color} />
  },
  {
    key: 4,
    title: 'Product Reviews',
    desc: 'The application aims to assist users in obtaining opinions on products or services, enabling the evaluation of products based on content analysis rather than just descriptions',
    icon: <Barcode size={size} color={color} />
  },
];

const Features = () => {
  const featuresList = featureContent.map((content) => {
    return (
      <Feature key={content.key} title={content.title} desc={content.desc} icon={content.icon} />
    );
  });

  return (
    <section className="padding-sides margin-top">
      <h2 className={styles.title}>Key Features of WhatTheyMean</h2>
      <div className={`${styles.grid} ${styles['grid--2-col']}`}>{featuresList}</div>
    </section>
  );
};

export default Features;
