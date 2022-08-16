"""API initialization for MMR Tracker v1."""
from fastapi import APIRouter

from app.api.v1 import items, ping

api_router = APIRouter()
api_router.include_router(ping.router, prefix="/ping", tags=["health-check"])
api_router.include_router(items.router, prefix="/items", tags=["items"])
