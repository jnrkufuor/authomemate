# authomemate
### IoT Wot Server and Dashboard System
This is a automated lighting and cooling system for homes. The idea is to control the temperature of a room by automatically turning a fan on when the threshold temperature of the room has been passed. Automated lighting works on the premise of turning on and off a light when a person(warm blooded body) has been detected.

#### Automated lighting
AutHomeMate seeks to promote energy efficiency through this. The idea is to turn on lighting when an individual is present in the room. We achieve this through the use of a proximity sensor. This way our system is able to preserve energy. There is a slight delay in checks to ensure that lights are not switched off immediately. We also put the same technology in the garage. 

#### Automated heating
AutHomeMate seeks to achieve this through temperature measurement. We measure the temperature in a room and based on a set threshold, our cooling system is turned on to ensure that the temperature is kept below the threshold. 


#### Hardware
We use a
- Proximity Infrared Sensor : Detecting warm blooded animals
- LED light - LED bulb to be turned on 
- DC motor fan - Fan to regulate room temperature
- DHT22 sensor - Temperature and humidity sensor

#### Dashboard and Server
The Server is built in Node JS.
The Dashboard is built in HTML, CSS and JavaScript. 

##### To start the server
``sudo node ./wot-server.js ``

##### Accessing the Dashboard
Open ``dashboard/index.html`` in a browser

This program runs a simulation for only one room, however can be extended easily to cater for more rooms.


##### Contributor
[https://github.com/estherkamau/]
