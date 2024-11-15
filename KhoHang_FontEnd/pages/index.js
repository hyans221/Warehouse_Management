import Head from 'next/head';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import ScrollUp from '@/components/ScrollUp/ScrollUp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kho hàng</title>
        <meta name='description' content='Trang web kho hàng' />
        <link rel='icon' href='./images/favicon.png' />
      </Head>
      <Header />
      <Main />
      <Footer />
      <ScrollUp />
    </div>
  );
}