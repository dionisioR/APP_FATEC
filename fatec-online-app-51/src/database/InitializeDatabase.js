import * as SQLite from 'expo-sqlite';

export default async function initializeDatabase() {
    const db = await SQLite.openDatabaseAsync('student_database.db');

    await db.execAsync(`
        PRAGMA journal_mode = WAL;

        DROP TABLE IF EXISTS avisos_aluno;
        DROP TABLE IF EXISTS aula;
        DROP TABLE IF EXISTS disciplina;
        DROP TABLE IF EXISTS professor;
        DROP TABLE IF EXISTS status;
        DROP TABLE IF EXISTS aviso;
        DROP TABLE IF EXISTS historico;
        DROP TABLE IF EXISTS aluno;
        DROP TABLE IF EXISTS curso;
        DROP TABLE IF EXISTS semestre;

        CREATE TABLE IF NOT EXISTS semestre (
            sem_id INTEGER PRIMARY KEY,
            sem_numeracao INTEGER,
            sem_descricao TEXT
        );

        CREATE TABLE IF NOT EXISTS curso (
            cur_id INTEGER PRIMARY KEY,
            cur_nome TEXT,
            cur_sigla TEXT
        );

        CREATE TABLE IF NOT EXISTS aluno (
            alu_id INTEGER PRIMARY KEY,
            alu_nome TEXT,
            alu_ra TEXT,
            alu_email TEXT,
            alu_codigodeverificacao TEXT,
            alu_datavestibular TEXT,
            alu_classificacao INTEGER,
            alu_semestrespercorridos INTEGER,
            sta_id INTEGER,
            cur_id INTEGER,
            FOREIGN KEY (sta_id) REFERENCES status(sta_id),
            FOREIGN KEY (cur_id) REFERENCES curso(cur_id)
        );

        CREATE TABLE IF NOT EXISTS historico (
            his_id INTEGER PRIMARY KEY,
            his_disciplina TEXT,
            his_nota REAL,
            his_falta INTEGER,
            cur_id INTEGER,
            sem_id INTEGER,
            alu_id INTEGER,
            FOREIGN KEY (cur_id) REFERENCES curso(cur_id),
            FOREIGN KEY (sem_id) REFERENCES semestre(sem_id),
            FOREIGN KEY (alu_id) REFERENCES aluno(alu_id)
        );

        CREATE TABLE IF NOT EXISTS aviso (
            avi_id INTEGER PRIMARY KEY,
            avi_datainicio TEXT,
            avi_datafim TEXT,
            cur_id INTEGER,
            avi_descricao TEXT,
            FOREIGN KEY (cur_id) REFERENCES curso(cur_id)
        );

        CREATE TABLE IF NOT EXISTS status (
            sta_id INTEGER PRIMARY KEY,
            sta_descricao TEXT
        );

        CREATE TABLE IF NOT EXISTS professor (
            pro_id INTEGER PRIMARY KEY,
            pro_nome TEXT,
            pro_cargo TEXT,
            pro_email TEXT
        );

        CREATE TABLE IF NOT EXISTS disciplina (
            dis_id INTEGER PRIMARY KEY,
            dis_sigla TEXT,
            dis_nome TEXT,
            pro_id INTEGER,
            FOREIGN KEY (pro_id) REFERENCES professor(pro_id)
        );

        CREATE TABLE IF NOT EXISTS aula (
            aul_id INTEGER PRIMARY KEY,
            aul_diasemana TEXT,
            aul_hora TEXT,
            aul_data TEXT,
            aul_presenca INTEGER,
            aul_descricao TEXT,
            alu_id INTEGER,
            dis_id INTEGER,
            FOREIGN KEY (alu_id) REFERENCES aluno(alu_id),
            FOREIGN KEY (dis_id) REFERENCES disciplina(dis_id)
        );

        CREATE TABLE IF NOT EXISTS avisos_aluno (
            avialu_id INTEGER PRIMARY KEY,
            avialu_datainicio TEXT,
            avialu_datafim TEXT,
            avialu_descricao TEXT,
            alu_id INTEGER,
            FOREIGN KEY (alu_id) REFERENCES aluno(alu_id)
        );
    `);
}
