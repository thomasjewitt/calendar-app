import sqlite3
import uuid

db_file = "data.db"

create_events_table_sql = """
    CREATE TABLE IF NOT EXISTS events
    (id TEXT PRIMARY KEY, date TEXT, title TEXT, description TEXT);
"""

create_event_sql = """
    INSERT INTO events 
    VALUES (?, ?, ?, ?);
"""

get_events_sql = """
    SELECT *
    FROM events;
"""


def create_database_on_startup():
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()
    cursor.execute(create_events_table_sql)
    conn.commit()
    conn.close()


def insert_event(date: str, title: str, description: str):
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()
    cursor.execute(create_event_sql, (str(uuid.uuid4()), date, title, description))
    conn.commit()
    conn.close()


def get_all_events():
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()
    cursor.row_factory = sqlite3.Row
    cursor.execute(get_events_sql)
    events = []
    for row in cursor.fetchall():
        events.append({
            "event_id": row["id"],
            "date": row["date"],
            "title": row["title"],
            "description": row["description"]
        })
    conn.close()
    return events

