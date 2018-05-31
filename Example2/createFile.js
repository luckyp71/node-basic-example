// Create or Update file using node js file system
var fs = require('fs');

// Create or update fine using appendFile() method.
fs.appendFile('../Resources/createdFile.txt','The content of the file',
                function(e){
                    if(e) throw e;
                    console.log('Saved');
                });

// Create file using open() method.   
// It could only work as long as the file doesn't exist     
// fs.open('../Resources/createdFile2.txt', 'w', function(e, f){
//     if (e) throw e;
//     console.log('Saved');
// })

// Create or update file using writeFile() method.
// fs.writeFile('../Resources/createdFile3.txt', 'The content of the file', function(e){
//     if (e) throw e;
//     console.log('Saved');
// })