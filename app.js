var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmLParser = require("./HtmlParser");
const HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();




async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados =  Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    //console.log(html);
    //console.log(usuarios);
    //console.log(usuarios.RowCount);
    //console.log(usuarios.ColumnCount);

    
    escritor.Write(Date.now() + ".html", html);
    PDFWriter.writePDF(Date.now() + ".pdf", html);

   
}



main();


