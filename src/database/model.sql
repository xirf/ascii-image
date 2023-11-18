CREATE TABLE project(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT NOT NULL,
    image TEXT NOT NULL,
    color TEXT NOT NULL,
    text TEXT NOT NULL,
    fontSize INTEGER NOT NULL,
    fontFamily TEXT NOT NULL,
    lineHeight INTEGER NOT NULL,
    align TEXT NOT NULL
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
);