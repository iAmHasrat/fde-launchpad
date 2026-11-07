from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel

app=FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
@app.get("/")
def home():
    return FileResponse("static/index.html")

class Message(BaseModel):
    message: str

@app.get("/api/hello")
def hello():
    return {"message": "Hello, from FastAPI!"}

@app.post("/api/echo")
def echo(message: Message):
    return {"message is": message.message}  

@app.post("/api/count")
def count(data: Message):
    return {"message length is": len(data.message)}  

