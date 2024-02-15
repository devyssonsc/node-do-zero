import { sql } from './app.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//     console.log('tabela deletada')
// })

sql`
    CREATE TABLE videos (
        id          TEXT PRIMARY KEY,
        title       TEXT NOT NULL,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
    console.log('tabela criada')
})
