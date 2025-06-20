from fastapi.middleware.cors import CORSMiddleware
from fastapi import APIRouter

print("Hello, World!")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

@router.get("/api/stats")
def get_stats():
    return {"total_items": 42, "low_stock": 5}

app.include_router(router)