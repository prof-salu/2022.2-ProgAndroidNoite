-- Comentario de linha

--Tabela livro
    -- codigo    INT    PK
    -- titulo    TEXT
    -- assunto   TEXT
    -- editora   TEXT
    -- autor     TEXT
    
CREATE TABLE livro(
    codigo    INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo    TEXT,
    assunto   TEXT,
    editora   TEXT,
    autor     TEXT
);

-- CRUD (CREATE, READ, UPDATE, DELETE)

--INSERT
INSERT INTO livro (titulo, assunto, editora, autor)
VALUES ("Aprendendo React Native", "Programacao", "NOVATEC", "Zeca");

INSERT INTO livro (editora, assunto, titulo)
VALUES ("Moderna", "Culinaria", "Receitas da vovo");

INSERT INTO livro (titulo, assunto, editora, autor)
VALUES ("Contos de terror", "Terror", "Trevas", "Ze do caixao");

INSERT INTO livro (titulo, assunto, editora, autor)
VALUES ("ONE punch MaM VOl. 78", "Manga", "Abril", "One");

INSERT INTO livro 
VALUES (2, "Aprendendo SQL", "Banco de dados", null, "Mara");

--SELECT
-- todas as colunas e todas as linha da tabela livro
SELECT * FROM livro;

-- exibir apenas o titulo, assunto e a editora
SELECT titulo, assunto, editora FROM livro;

-- exibir os livros da editora NOVATEC
SELECT * FROM livro WHERE editora = 'novatec';
SELECT * FROM livro WHERE editora = 'NOVATEC';

SELECT * FROM livro
WHERE UPPER(titulo) = UPPER('one punch mam vol. 78');

SELECT * FROM livro
WHERE LOWER(titulo) = LOWER('one punch mam vol. 78');

SELECT lower(titulo), UPPER(assunto) from livro;

-- UPDATE
UPDATE livro
SET titulo='One Punch Man Vol.78'
WHERE codigo=4;

UPDATE livro
SET titulo='Arte da guerra', autor='Sun Tzu', editora='Show'
WHERE codigo=5;

-- DELETE
DELETE FROM livro
WHERE codigo = 6;

DELETE FROM livro
WHERE assunto = 'Manga';

DELETE FROM livro
WHERE codigo = 2;