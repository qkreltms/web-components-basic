DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "todo";

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar NOT NULL DEFAULT '',
	"updated_at" TIMESTAMP DEFAULT NULL,
	"created_at" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL DEFAULT NULL,
	"text" varchar DEFAULT '',
	"updated_at" TIMESTAMP DEFAULT NULL,
	"created_at" TIMESTAMP DEFAULT NOW(),
	"completed" bool DEFAULT FALSE,
	CONSTRAINT fkUserId FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_timestamp BEFORE UPDATE ON "todo" FOR EACH ROW EXECUTE PROCEDURE update_timestamp();

INSERT INTO "user" (username) VALUES ('test');
INSERT INTO "todo" (user_id, text, completed)
		VALUES(1, 'test message', FALSE), (1, 'test message2', TRUE);