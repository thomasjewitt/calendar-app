from fastapi import FastAPI

app = FastAPI()


@app.get("/event/")
async def get_events():
    return {"message": "Hello World"}

@app.post("/event/")
async def create_event():
