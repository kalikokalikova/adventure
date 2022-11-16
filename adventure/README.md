### Adventure REACT frontend

Built by following this tutorial:
https://www.youtube.com/watch?v=sh4WrNGDvQM

## For front end devs who don't want to run rails on their local machines

1. Clone the repo down to your machine
2. Navigate into the adventure folder, which contains the React front end (adventure/adventure/).
3. In App.js, change line 6 from:
` const API_URL = "http://localhost:3000/api/v1/points"; `
to 
` const API_URL = "https://adventure.mocklab.io/api/v1/points"; `

This will grab data from an outside API that I created just for the purposes of developing. Make sure you change it back to the local host url before you push to github (although if you forget, it's not the end of the world. Just do your best.)

4. Run `npm start` in your terminal to run locally.

Sincerely hope whatever chaotic problems this causes are fewer than the chaos of installing rails 7 on 19 different machines.

Cheers!
