import * as SQLite from 'expo-sqlite';

SQLite.openDatabase('student_database.db').transactionAsync = function (callback) {
    return new Promise((resolve, reject) => {
      this.transaction(
        tx => callback(tx),
        reject,
        resolve
      );
    });
  };
  
  
const fetchAndInsertData = async (db, tableName, data) => {
  try {
    const columns = Object.keys(data[0]).join(', ');
    const placeholders = Object.keys(data[0]).map(() => '?').join(', ');

    const insertQuery = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

    for (const row of data) {
      const values = Object.values(row);
      await db.transactionAsync(tx => {
        tx.executeSql(insertQuery, values);
      });
    }

    console.log(`Dados inseridos na tabela ${tableName} com sucesso.`);
  } catch (error) {
    console.error(`Erro ao inserir dados na tabela ${tableName}:`, error);
  }
};

const fetchDataFromURL = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao acessar ${url}: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export default async function insertDataIntoDatabase() {
  const db = SQLite.openDatabase('student_database.db');

  const urls = {
    semestres: 'http://192.168.21.184:5000/semestres',
    cursos: 'http://192.168.21.184:5000/cursos',
    aluno: 'http://192.168.21.184:5000/aluno',
    historico: 'http://192.168.21.184:5000/historico',
    avisos: 'http://192.168.21.184:5000/avisos',
    status: 'http://192.168.21.184:5000/status',
    professores: 'http://192.168.21.184:5000/professores',
    disciplinas: 'http://192.168.21.184:5000/disciplinas',
    aulas: 'http://192.168.21.184:5000/aulas',
    avisos_aluno: 'http://192.168.21.184:5000/avisos_aluno',
  };

  const tableMapping = {
    semestres: 'semestre',
    cursos: 'curso',
    aluno: 'aluno',
    historico: 'historico',
    avisos: 'aviso',
    status: 'status',
    professores: 'professor',
    disciplinas: 'disciplina',
    aulas: 'aula',
    avisos_aluno: 'avisos_aluno',
  };

  try {
    for (const [key, url] of Object.entries(urls)) {
      const data = await fetchDataFromURL(url);
      if (data.length > 0) {
        const tableName = tableMapping[key];
        await fetchAndInsertData(db, tableName, data);
      }
    }

    console.log('Dados inseridos em todas as tabelas com sucesso.');
  } catch (error) {
    console.error('Erro geral ao inserir dados:', error);
  }
}
