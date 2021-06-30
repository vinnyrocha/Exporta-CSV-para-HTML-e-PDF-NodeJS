const fs = require("fs");



function modificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) => {
   
        if (erro){
            console.log("Ocorreu uma falha durante a leitura do arquivo!");
        }else{
           
            var conteudo = JSON.parse(dados);
           
           conteudo.nome = nome;
           conteudo.curso = curso;
           conteudo.categoria = categoria;
    
                fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
                
                    if (erro){
                        console.log("Ocorreu uma falha durante a escrita do arquivo!");
                    }
                });
    
    
    
           console.log(conteudo);
        }
    }); 
}

modificarUsuario("Pedro", "Curso de PHP", "PHP");









