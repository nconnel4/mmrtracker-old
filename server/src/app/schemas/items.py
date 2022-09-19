"""Schema file for returning item list"""
from typing import Dict, Optional

from pydantic import BaseModel, Field


class Item(BaseModel):
    id: str
    name: str
    image: str
    type: str
    quantity: Optional[int]
    tracker_text: Optional[str] = Field(alias="trackerText")


class Items(BaseModel):
    __root__: Dict[str, Item]
