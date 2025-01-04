import React from 'react'
import PropertyGrid from '../components/PropertyGrid';
import properties from '../assets/properties(1).json'

const ViewAllProperties = () => {
  return (
    <PropertyGrid sliceValue={properties.properties.length}/>
  )
}

export default ViewAllProperties