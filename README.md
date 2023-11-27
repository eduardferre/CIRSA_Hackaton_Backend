# CIRSA_Hackaton_Backend

Run the API on http://localhost:5212

Before testing, a third-party tool has been used: k6. It should be installed following the installation guide:

https://k6.io/docs/get-started/installation/

Once the API is up, you can run every test by executing the following command (changing folder and script):

k6 run SmokeTesting/AllEndpointsTest.js

K6 itself brings the desired metrics to see how the API is performing.

However, the times and other parameters can be changed from the scripts.
The times stated have been chosen to have a reasonable duration, but, in real life tests are much longer to test totally the server behaviour.
