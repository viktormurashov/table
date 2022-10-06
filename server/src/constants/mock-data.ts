export const initTableSQL = `
  CREATE TABLE IF NOT EXISTS "test" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "date" bigint NOT NULL,
    "amount" integer NOT NULL,
    "distance" integer NOT NULL,
    PRIMARY KEY ("id")
  );
`;

export const initDataSQL = `
  INSERT INTO "test"
  ("name", "date", "amount", "distance")
  VALUES
  ('test', 1664913832100, 5, 10),
  ('тест', 1664913845100, 10, 5),
  ('имя', 1664914032100, 12, 5),
  ('name', 1664924832100, 1, 8),
  ('lol', 1674913832100, 20, 10),
  ('qwerty', 1664913333100, 120, 15),
  ('ещё что-то', 1664912532100, 101, 33);
`;
