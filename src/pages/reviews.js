import Head from 'next/head';
import React from 'react';

const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Жирные Бургеры | Отзывы</title>
        <meta name="title" content="Все о жирных бургерах" />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.map((obj) => {
              return (
                <div key={obj.id} className="review">
                  {obj.id}) {`${obj.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default ReviewsPage;
