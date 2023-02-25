import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Burger.module.css';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Бургеры</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div>
        <h1>Our Burgers</h1>
        {burgers.map((burger) => (
          <Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image src={`${burger.image}`} alt={`${burger.name}`} width={150} height={150} />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Burgers;
