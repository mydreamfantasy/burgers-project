import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ой</h1>
      <h2>Такой страницы тут нет</h2>
      <p>
        Перехожу на <Link href="/">главную</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
