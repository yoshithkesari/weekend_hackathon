from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

#DATA

INTEREST_TAGS = [
    "startup","ideas","breakup","depression","anxiety","creativity","music","books",
    "philosophy","relationships","motivation","career","loneliness","gaming","anime",
    "fitness","finance","poetry","politics","spirituality","travel","technology",
    "art","food","productivity"
]

class User(BaseModel):
    id: str
    interests: list[str]

#GRAPH STATE

graph = nx.Graph()

def init_graph():
    for tag in INTEREST_TAGS:
        graph.add_node(f"#{tag}", type="tag")

init_graph()

#CORE LOGIC

def add_user_to_graph(user: User):
    graph.add_node(user.id, type="user")
    for tag in user.interests:
        graph.add_node(f"#{tag}", type="tag")
        graph.add_edge(user.id, f"#{tag}", weight=1.0)

def get_user_tags(user_id):
    return {n for n in graph.neighbors(user_id)
            if graph.nodes[n].get("type") == "tag"}

def get_matches(user_id, top_n=10):
    if user_id not in graph:
        raise HTTPException(404, "User not found")

    tags_a = get_user_tags(user_id)
    results = []

    for node, attrs in graph.nodes(data=True):
        if attrs.get("type") != "user" or node == user_id:
            continue

        tags_b = get_user_tags(node)
        intersection = tags_a & tags_b
        if not intersection:
            continue

        union = tags_a | tags_b
        score = len(intersection) / len(union)

        results.append({
            "matched_user": node,
            "score": round(score, 4),
            "shared_tags": [t[1:] for t in intersection]
        })

    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:top_n]

#API ENDPOINTS

@app.post("/users")
def create_user(user: User):
    add_user_to_graph(user)
    return {"message": "User added", "user_id": user.id}

@app.get("/users/{user_id}")
def get_user(user_id: str):
    if user_id not in graph:
        raise HTTPException(404, "User not found")

    return {
        "user_id": user_id,
        "interests": [t[1:] for t in get_user_tags(user_id)]
    }

@app.get("/matches/{user_id}")
def match_users(user_id: str, top_n: int = 5):
    matches = get_matches(user_id, top_n)
    return {
        "user_id": user_id,
        "matches": matches
    }

@app.get("/graph/summary")
def summary():
    return {
        "nodes": graph.number_of_nodes(),
        "edges": graph.number_of_edges()
    }
