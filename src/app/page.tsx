"use client";
import React from 'react';
import Preloader from './components/preloader';
import Accueil from './components/accueil/accueil';

export default function Home() {
  return (
    <>
      <Preloader />
      <Accueil />
    </>
  );
}