
function twodimentional(arrayone, arraytwo) {
 
    var result = new Array(arrayone.length);
    
    for (var i=0; i<result.length; i++) {
        
      result[i] = new Array(arraytwo[i].length);
      for (var j=0; j< arrayone.length; j++) {
   
          result[i][j] = 0
          for (var k=0; k<arraytwo.length; k++ ) {
              result[i][j] += arrayone[i][k] * arraytwo[k][j];
          }
      }
    }
    return result;
   }
   
   function display(result) {
     for (var i= 0; i < result.length; ++i) {
       document.write(result[i].join(' ')+'<br />');
     }
   }
   
   var arrayone = [[2,2],[4,4]]
   var arraytwo = [[3,3],[5,5]]
   
   document.write('matrix arrayone:<br />');
   display(arrayone);
   document.write('matrix arraytwo:<br />');
   display(arraytwo);
   document.write('arrayone * arraytwo =<br />');
   display(twodimentional(arrayone,arraytwo));
   
   