from fastapi import FastAPI
from fastapi.responses import Response
from database import *
from models import SubmitEvent

app = FastAPI()


@app.on_event("startup")
async def startup():
    create_database_on_startup()


@app.get("/events/")
async def get_events():
    events = get_all_events()
    events_map = {}
    for event in events:
        if event["date"] in events_map.keys():
            events_map[event["date"]].append(event)
        else:
            events_map[event["date"]] = [event]
    return events_map


@app.post("/events/")
async def create_event(event: SubmitEvent):
    try:
        insert_event(event.date, event.title, event.description)
        return event
    except Exception as e:
        return Response(status_code=500, content={"error": e})


@app.delete("/events/{event_id}")
async def remove_event(event_id: str):
    try:
        delete_event(event_id)
        return {}
    except Exception as e:
        return Response(status_code=500, content={"error": e})