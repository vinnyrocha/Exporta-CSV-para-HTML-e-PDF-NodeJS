class Processor {
    static Process(data){
       var a = data.split("\r\n");
       var rows = [];  
       //console.log(a);

       a.forEach(row => {
          var arr = row.split(",");
          rows.push(arr);
       });

       //console.log(rows);
       return rows;
    }
}

module.exports = Processor;