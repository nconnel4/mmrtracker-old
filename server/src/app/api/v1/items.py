"""API path for obtaining seed items"""
import json
import logging
from pathlib import Path
from typing import Any

from fastapi import APIRouter

from app import schemas

router = APIRouter()
cwd = Path.cwd()


@router.get("", response_model=schemas.Items)
def get_items() -> Any:
    """
    Load item list from json file
    """
    logger = logging.getLogger(__name__)

    json_file = cwd.joinpath("src/app/data/items.json").resolve()
    logger.debug(json_file)
    with open(json_file, "r", encoding="utf-8") as source:
        items = json.load(source)
    return items
