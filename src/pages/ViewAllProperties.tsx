import React from 'react'
import PropertyGrid from '../components/PropertyGrid';
import properties from '../assets/properties(1).json'
import FilterForm from '../components/FilterForm';
import Footer from '../components/Footer';

const ViewAllProperties = () => {
  return (
    <>
        <FilterForm/>
        <PropertyGrid sliceValue={properties.properties.length}/>
        <Footer/>
    </>
  )
}

export default ViewAllProperties