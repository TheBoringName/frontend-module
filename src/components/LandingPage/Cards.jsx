import Card from './Card';
import {
  ClockClockwise,
  UsersThree,
  MaskHappy,
  Slideshow,
  Crop,
  ImagesSquare,
  HourglassMedium,
  UsersFour,
  NumberCircleOne,
} from '@phosphor-icons/react';
import styles from './Cards.module.css';

const Cards = () => {
  const color = '#91a7ff';
  const info = [
    {
      brandName: 'Tiktok',
      logo: '/icons8-tiktok-100.svg',
      list: [
        {
          key: 1,
          desc: 'Short, creative video content.',
          icon: <ClockClockwise size={24} color={color} />,
        },
        {
          key: 2,
          desc: 'User-generated video challenges.',
          icon: <UsersThree size={24} color={color} />,
        },
        {
          key: 3,
          desc: 'Quick, engaging video clips.',
          icon: <MaskHappy size={24} color={color} />,
        },
      ],
    },
    {
      brandName: 'Instagram',
      logo: '/icons8-instagram-100.svg',
      list: [
        {
          key: 4,
          desc: 'Visual story sharing through photos and videos.',
          icon: <Slideshow size={24} color={color} />,
        },
        {
          key: 5,
          desc: 'Highlights moments with short video clips.',
          icon: <Crop size={24} color={color} />,
        },
        {
          key: 6,
          desc: 'Video content alongside photos.',
          icon: <ImagesSquare size={24} color={color} />,
        },
      ],
    },
    {
      brandName: 'Youtube',
      logo: '/icons8-youtube-100.svg',
      list: [
        {
          key: 7,
          desc: 'Extensive library of long-form videos.',
          icon: <HourglassMedium size={24} color={color} />,
        },
        {
          key: 8,
          desc: 'Wide-ranging video genres and creators.',
          icon: <UsersFour size={24} color={color} />,
        },
        {
          key: 9,
          desc: 'Primary hub for longer video content.',
          icon: <NumberCircleOne size={24} color={color} />,
        },
      ],
    },
  ];

  return (
    <section className="padding-sides">
      <div className={`${styles['cards']} ${styles['grid--3-col']}`}>
        <Card info={info[0]} />
        <Card info={info[1]} />
        <Card info={info[2]} />
      </div>
    </section>
  );
};

export default Cards;
