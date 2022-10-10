### General

Its an Api service for peoples who loves **Super Heroes**, who wants see their magnificent photos and want to be a little closer to their idols. 
This service was created with **Node.js+Express** technology for `REST API` and **React**, **React-Redux** and **RTK-Query** technology.
It is easy to use. **You can try it!**




### Start Server

- Execute the command from the `server` folder in the console `npm start` to start server or `npm start:dev` to start develop.  

- Execute the command from the main folder in the console `npm start` to start UI.

### Super hero infrormation paths

**GET** : http://localhost:3000/api/super_heroes - get all information about super heroes.  

**GET** : http://localhost:3000/api/super_heroes/`id` - get information about current super hero.  

**POST** : http://localhost:3000/api/super_heroes - add super hero to collection.  

**PUT** : http://localhost:3000/api/super_heroes/`id` - update current super hero information (all filds requiered).  

**DELETE** : http://localhost:3000/api/super_heroes/`id` - delete super hero.  


### Super hero image paths

**PATCH** : http://localhost:3000/api/files/images/`nickname`/`image_path` - add image to super hero gallery.  

**DELETE** : http://localhost:3000/api/files/images/delete/`nickname`/`image_path`  - delete image from super hero gallery.  

**IMAGE** : http://localhost:3000/api/files/download/`nickname`/`image_path`  - delete image from super hero gallery.  



`nickname` - nickname of super hero.  

`image_path` - name and extension saved photo (you can get it from super hero info).  


### DB

In the REST API used MongoDB base. In `.env` file, `DB_SH` parameter, you can add yours path to your DB.

### Settings

`PORT` - port where servers start.  

`DB_SH`- connect to **MongoDB**.  

`IMAGE_PATH`= path to images folder. (must be created).  




