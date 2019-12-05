	CREATE DATABASE xadrez;

	use xadrez;

	create table area(
		id int(11) AUTO_INCREMENT,
		nome varchar(255),
		create_at DATETIME,
		updated_at DATETIME,
		primary key (id)
	);

	create table curso(
		id int(11) AUTO_INCREMENT,
		sigla char(4),
		nome varchar(255),
		descricao TEXT,
		area_id int(11),
		create_at DATETIME,
		updated_at DATETIME,
		primary key (id),
		FOREIGN KEY (area_id) REFERENCES area(id)
	);

	create table user(
		id int(11) AUTO_INCREMENT,
		nome varchar(255),
		email varchar(255),
		senha varchar(255),
		curso_id int(11),
		create_at DATETIME,
		updated_at DATETIME,
		primary key (id),
		FOREIGN KEY (curso_id) REFERENCES curso(id)
	);

	create table partida(
		id int(11) AUTO_INCREMENT,
		user_id_1 int(11),
		user_id_2 int(11),
		winner int(11),
		fen varchar(255),
		create_at DATETIME,
		updated_at DATETIME,
		primary key (id),
		FOREIGN KEY (user_id_1) REFERENCES user(id),
		FOREIGN KEY (user_id_2) REFERENCES user(id)
	);

	create table mensagem(
		id int(11) AUTO_INCREMENT,
		partida_id int(11),
		user_id int(11),
		mensagem varchar(255),
		create_at DATETIME,
		updated_at DATETIME,
		primary key (id),
		FOREIGN KEY (partida_id) REFERENCES partida(id),
		FOREIGN KEY (user_id) REFERENCES user(id)
	);

