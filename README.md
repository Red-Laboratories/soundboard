# DJ SoundBoard 
Online launchpad that allows you to customize a grid of buttons and play them using your keyboard

## Overview

### Techstack
1. React
2. React Router
3. Howler - audio library
4. SQL
5. Express
6. Node
7. Tailwind - styling

### Diagrams
Importable Scene to [Excalidraw](./client/components/img/soundboard-excalidraw.png)
-Contains mapping of frontend and backend
[ER Diagram](./client/components/img/Database.png)

### Setup
1. Execute npm install
2. devServer -  use npm run dev
3. production - 
    1. npm run build
    2. npm start
4. Login
    * At server startup you will be auto directed to a login page. Please enter the below credentials to use the sound board
    * username: tracy
    * password: ilovedogs

### Working features
1. Login/Logout
2. Cookies and Sessions
    *unable to bypass login screen without correct credentials
3. playing sounds via mouse click and/or keyboard
4. Database storing button keyboard value and sound file name

### Notes
1. You may want to change the URI for the SQL database for better configuring. 
[URI Location](server/models/soundboardModel.js)
2. Importing new sounds -
    1. download sounds to your local machine first 
    2. test sounds using your preferred media player
    3. drag and drop into [sound](client/components/sounds)
3. keyboard values on board are supposed to be in the following order for better UX, but order got rearranged working on an imcomplete feature.
    * Q W E
    * A S D
    * Z X C


    



