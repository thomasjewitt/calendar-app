from pydantic import BaseModel

class SubmitEvent(BaseModel):
    title: str
    description: str
    date: str
