"""API path used to check that the backend is running"""
from typing import Any

from fastapi import APIRouter

from app import schemas

router = APIRouter()


@router.get("", response_model=schemas.Message)
def ping() -> Any:
    """
    Check api is receiving requests
    """

    return {"message": "pong!"}
