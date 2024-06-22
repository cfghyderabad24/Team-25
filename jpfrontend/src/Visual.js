import React from 'react'
import Navigation from './Navigation'
import SimpleBarChart from './SimpleBarChart' 
import CountByCrop from './CountByCrop'
import IrrigationMethod from './IrrigationMethod'
import AgeVis from './AgeVis'
import GenderVis from './GenderVis'
import YeildByFert from './YeildByFert'
function Visual() {
  return (
    <div>
        <Navigation/>
        <br/>
        <h1>Age Distribution of Farmers</h1>
        <AgeVis/>
        <br/>
        <br/>
        <h1>Distribution of Gender</h1>
        <GenderVis/>
        <br/>
        <h1>Number of Farmers Present in Diffrent Places</h1>
        <SimpleBarChart/>
        <br/>
        <h1>Number of Farmer Using Various Irrigation Methods</h1>
        <IrrigationMethod/>
        <br/>
        <h1>Number of Farmers Planted Each Crop </h1>
        <CountByCrop/>
        <br/>

    </div>
  )
}

export default Visual