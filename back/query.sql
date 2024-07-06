DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "todo";

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar NOT NULL DEFAULT '',
	"updated_at" date DEFAULT NULL,
	"created_at" date DEFAULT NOW()
);
CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL DEFAULT NULL,
	"text" varchar DEFAULT '',
	"updated_at" date DEFAULT NULL,
	"created_at" date DEFAULT NOW(),
	"completed" bool DEFAULT FALSE,
	CONSTRAINT fkUserId FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO "user" (username) VALUES ('test');
INSERT INTO "todo" (user_id, text, completed)
		VALUES(1, 'test message', FALSE), (1, 'test message2', TRUE);