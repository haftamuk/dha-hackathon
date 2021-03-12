# dha-hackathon

This repository is created to simulate APIs of identified HIS endpoints to help focus hackathon participants on health data exchange and interoperability.

## Objective

- Simplify development setup and guide participants to focus on health data exchange and interoperability.

## Installation

- Install nodeJS
- Clone this repository

<code>
git clone https://github.com/haftamuk/dha-hackathon.git
</code>

## Run the following comands specific to each endpoint

### Use case: DAGU-EMR data exchange

Dagu / eAPTS as an application for stock pharmacy maintains the drug and medication lists of a given facility at a dispensing unit level. On the other hand, a dispensary pharmacy which is part of the EMR system deals with a single order. On the other hand, clinicians use the EMR system to prescribe medication for a patient so that the prescription is directly sent to the pharmacy. That is why the integration of EMR and DAGU is needed to make sure if a medication is available and the transaction goes smoothly.

<code> 
  cd dagu

npm start

cd ../emr

npm start  
</code>

### EMR-DHIS2 data exchange

A point of service application such as EMR deals with individual patient details. But after all information of individuals gets aggregated to abstract registers and reported based on the list of the national indicators. So, the need for different disaggregation and data sets in defining a given report comes with the use of a standardized HMIS system. Our country's HMIS uses DHIS2 as a system. So, to automatically generate, collect and sync periodic reports interoperability between these systems is much needed.

<code> 
  cd emr

npm start

cd ../dhis2

npm start  
</code>

### eCHIS/DHIS2 data exchange

eCHIS/DHIS2 data exchange
Ethiopia’s health system is decentralized and most of the service is given at health post and health center settings. Data exchange between eCHIS and DHIS2 is needed to reveal the continuum of service and care of individuals.
<code>
cd echis
npm start
cd ../dhis2
npm start  
</code>

### DATIM report migrater

HIV data collected using standardized excel from ART sites get encoded to DHIS2 software called DATIM at regional all zonal level.

<code> 
  cd datim
  npm start
</code>

### NHDD, MFR synchronization

A shared terminology and facility registries are the major components of eHA. A data dictionary portal serves as a single truth for other participating systems.

<code> 
  cd ts

npm start
</code>
