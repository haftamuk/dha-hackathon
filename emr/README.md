# EMR-hackathon

This repository is created to simulate APIs of identified HIS endpoints to focus hackathon participants on health data exchange and interoperability.

Resource taken from:
http://build.fhir.org/ig/who-int/anc-cds/Patient-mom.json.html

The following attributes are added to suite a use case at hand:
# Data Elements
## Antenatal Care coverage –First visit
### Total Number of pregnant women that received ANC First visit by gestational week => sum

1. less than 16 weeks gestation
2. greater than 16 weeks gestation
## Number of pregnant women that received ANC first visit by maternal age=> sum 
1. 10-14 yr
2. 15-19 yr
3. greater 20 yr
## Antenatal care coverage – four visits
### Total number of pregnant women who made four antenatal care visits dis aggregated by maternal age => sum
1. 10-14 yr
2. 15-19 yr
3. greatear 20 yr

> Please note: lookin the json file the week and date of birth will help you find out the data elements related to the gestation age and age category