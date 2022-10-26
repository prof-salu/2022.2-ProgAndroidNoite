--Comentario de linha
-- Livro
    -- codigo     (INTEIRO)
    -- titulo     (TEXTO)
    -- assunto    (TEXTO)
    -- autor      (TEXTO)  
    -- editora    (TEXTO)
    
CREATE TABLE livro(
    codigo    INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo    TEXT,
    assunto   TEXT, 
    autor     TEXT,
    editora   TEXT 
);

-- CRUD (CREATE, READ, UPDATE, DELETE)
    -- INSERINDO DADOS (INSERT)
INSERT INTO livro (titulo, assunto, autor, editora) VALUES 
("Aprendendo React", "Programacao", "Zeca Mariano", "Ed. Manga");

INSERT INTO livro (titulo, assunto, autor, editora) VALUES 
("A arte da guerra", "Estrategia", "Sun Tzu", "Ed. Flores");

INSERT INTO livro (titulo, assunto, autor, editora) VALUES 
("Codigo Limpo", "Programacao", "Manuel Tavares", "Ed. Flores");

    -- Consultando dados (select)
SELECT * FROM livro;

    -- EXIBIR AS COLUNAS TITULO, AUTOR E EDITORA
SELECT titulo, autor, editora FROM livro;

    -- EXIBIR TODOS OS LIVROS PUBLICADOS PELA EDITORA FLORES
SELECT titulo, autor, editora FROM livro WHERE editora = "Ed. Flores";

    -- Atualizando dados (update)
UPDATE livro
SET editora = "Moderna";

    -- Alterar o livro do zeca mariano para a editora NOVATEC
UPDATE livro
SET editora = "Novatec"
WHERE autor = "Zeca Mariano";

    -- Apagando dados (delete)
DELETE FROM livro
WHERE codigo = 2;