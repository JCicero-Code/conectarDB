
(async () =>{
    
  const database = require('./db');
  const Produto = require('./produto');
  
  try{ 
    const result = await database.sync();
    console.log('Conectado com sucesso ao banco de dados');
  }catch {
    console.log('Erro ao conectar com o banco de dados')
  }
    })();