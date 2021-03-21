# dha-hackathon

This repository is created to simulate APIs of identified HIS endpoints to help focus hackathon participants on health data exchange and interoperability. Check out the [wiki](https://github.com/haftamuk/dha-hackathon/wiki), to know more about the Hackathon!

# Objective

- Simplify development setup and guide participants to focus on health data exchange and interoperability.

# Installation

1. Install nodeJS

please use nodeJS documentation to install node https://nodejs.org/en/download/

2. Clone this repository

```
git clone https://github.com/haftamuk/dha-hackathon.git
```

navigate to each directory and install all dependency packages this is one time task.

```
npm install
```

# Run the following comands specific to each usecase

1. Use case: DAGU-EMR data exchange

Dagu / eAPTS as an application for stock pharmacy maintains the drug and medication lists of a given facility at a dispensing unit level. On the other hand, a dispensary pharmacy which is part of the EMR system deals with a single order. On the other hand, clinicians use the EMR system to prescribe medication for a patient so that the prescription is directly sent to the pharmacy. That is why the integration of EMR and DAGU is needed to make sure if a medication is available and the transaction goes smoothly.

You may use different terminal tabs to see logg messages from each end point:

Terminal-1

```
cd dagu
npm start
```

Terminal-2

```
cd ../emr
npm start
```

2. EMR-DHIS2 data exchange

A point of service application such as EMR deals with individual patient details. But after all information of individuals gets aggregated to abstract registers and reported based on the list of the national indicators. So, the need for different disaggregation and data sets in defining a given report comes with the use of a standardized HMIS system. Our country's HMIS uses DHIS2 as a system. So, to automatically generate, collect and sync periodic reports interoperability between these systems is much needed.

You may use different terminal tabs to see logg messages from each end point:

Terminal-1

```
cd emr
npm start
```

Terminal-2

```
cd ../dhis2
npm start
```

3. eCHIS/DHIS2 data exchange

eCHIS/DHIS2 data exchange
Ethiopia’s health system is decentralized and most of the service is given at health post and health center settings. Data exchange between eCHIS and DHIS2 is needed to reveal the continuum of service and care of individuals.

You may use different terminal tabs to see logg messages from each end point:

Terminal-1

```
  cd echis
  npm start
```

Terminal-2

```
  cd ../dhis2
  npm start
```

4. DATIM report migrater

HIV data collected using standardized excel from ART sites get encoded to DHIS2 software called DATIM at regional all zonal level.

```
cd datim
npm start
```

5. NHDD, MFR synchronization

A shared terminology and facility registries are the major components of eHA. A data dictionary portal serves as a single truth for other participating systems.

```
  cd ts
  npm start
```

## Hackathon Steps and Evaluation 
1. Level One: Integration of two HISs
- In this level, participants are expected to select a usecase from the available listes and try to integrate those two participating HIS applications. so the expectation is to understand the API of the participating applications and using the OpenHIM mediator to rearrange from the input sending applicaiton API to the output accepting API and send it to the receiving end. 
2. Level Two:Use terminology service
- If participants manage to pass the first level, there will be a challenge to use a third single source of truth terminology service as a shared sersvice to reconsile and aggree terminologies in between the participating applications. with that, participants will use terminology service.

3. Level Three: Testing on production/Mirror coresponding HIS
- There are ready instances of the HIS applicaitons and participants are expected to use this real systems for thier consumption.
