from langchain.chains import ConversationChain  # Import ConversationChain
# Import GeminiLM from langchain-community
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from typing import Dict
import os


# In-memory context storage (for demonstration purposes)
session_contexts: Dict[str, str] = {}

os.environ['GOOGLE_API_KEY'] = "AIzaSyANwPvr4Stl9iMnonsaRpeAScB5WSjMlkY"

# Initialize the language model (replace with your Gemini API key)
model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.7)

# Define a simple prompt template
prompt = PromptTemplate(
    input_variables=["history", "input"],
    template="The following is a conversation with a chatbot. The chatbot is helpful and knowledgeable.\n\n{history}\nUser: {input}\nChatbot:"
)

# Initialize the conversation chain with the prompt and language model
conversation_chain = ConversationChain(
    prompt=prompt,
    llm=model
)


def get_conversation_response(session_id: str, user_input: str) -> str:
    # Retrieve the conversation history for the session
    history = session_contexts.get(session_id, "")

    # Generate a response from the conversation chain
    result = conversation_chain.invoke(
        {"history": history, "input": user_input})  # Use invoke instead of run
    response = result['response']

    # Update the session context with the new user input and response
    new_history = f"{history}\nUser: {user_input}\nChatbot: {response}"
    session_contexts[session_id] = new_history

    return response


def main():
    session_id = "user123"  # Static session ID for simplicity; can be dynamic

    print("Chatbot: Hello! How can I assist you today?")

    while True:
        user_input = input("You: ")
        if user_input.lower() in {"exit", "quit"}:
            print("Chatbot: Goodbye!")
            break

        response = get_conversation_response(session_id, user_input)
        print(f"Chatbot: {response}")


if __name__ == "__main__":
    main()
