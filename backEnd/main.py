from typing import Union
from chatbot_logic import get_conversation_response
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from your React app's port
origins = ["http://localhost:3000"]


app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=[""], allow_headers=[""]
)


@app.get("/getSubmitRequest")
def chat(input_text: str):
    response = get_conversation_response("user123", input_text)
    print(response)
    return response
