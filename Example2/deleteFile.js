// Delete file using node js file system
var fs = require('fs');

fs.unlink('../Resources/createdFile2.txt', function(e){
    if (e) throw e;
    console.log('File deleted successfully');
});