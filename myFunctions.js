// import { marked } from 'marked';
const marked = require('marked');
const fs = require('fs');
const path = require('path');

// función que verifica si la ruta es absoluta, si no, la convierte
const convertToAbsolutePath = (paths) => {
    if(path.isAbsolute(paths)){
        console.log('es absoluta: ' + paths);
        return paths;
    }else{
        console.log('no es absoluta: ' + path.resolve(paths))
        return path.resolve(paths);
    }
};
// convertToAbsolutePath('./');

// función que lee el directorio 
const readDirectory = (file) => {
return new Promise ((resolve, reject) =>{ 
    let newArray = [];
    let subDirectories = [];
    fs.readdir(file, (error, files) => {
    if(error){
        reject('Error, this is not a directory');
    }
     files.forEach((file) => {
            if(path.extname(file) === '.md'){
             newArray.push(file);
            }else if(!path.extname(file)){
                fs.stat(file, (err, stats) =>{
                    if(err){
                        console.log('OTRO ERROR ', err);
                    }else if(stats.isDirectory() && file != 'node_modules' && file != '.git'){
                        subDirectories.push(file);
                        if(subDirectories.length > 0){
                            // console.log(subDirectories);
                            for(let i = 0; i < subDirectories.length; i++){
                                const againTry = subDirectories[i];
                                // console.log(againTry);
                               readDirectory('./' + againTry)/*.then(file =>{
                                    //si no existe .md no se suma 
                                }).catch(err => console.error('JAAAAA', err))*/
                            };
                        };
                    };
                });
            };
            resolve(newArray);
        })});        
})}
 
let fullPath = path.join(__dirname, './');
 
readDirectory(fullPath).then(file =>{
    console.log(file);
}).catch(err =>{
    console.error('ES ESTEEE', err);
});

