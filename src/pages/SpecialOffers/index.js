import React from 'react';
import OffersHero from '../../components/SpecialOffers/OffersHero';
import OffersList from '../../components/SpecialOffers/OffersList';
import OfferedClasses from '../../components/SpecialOffers/OfferedClasses';

function index() {
  return (
    <>
        <OffersHero />
        <OfferedClasses />
        <OffersList />
    </>
  )
}

export default index