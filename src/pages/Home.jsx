import React from 'react';
import Header from '../components/Header';
import FAQTable from '../components/FAQTable';
import AvailableForWork from '../components/AvailableForWork';

function Home() {
  return (
    <>
    <div className="flex h-screen flex-col justify-center items-center">
      <AvailableForWork />
      <Header />
      <FAQTable />
      </div>
    </>
  );
}

export default Home;
