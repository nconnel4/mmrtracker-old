"""Schema file for returning item list"""
from typing import Dict, List, Optional, Union

from pydantic import BaseModel, Field


class ItemProgression(BaseModel):
    name: str
    image: str
    quantity: Optional[int]


class ProgressiveItem(BaseModel):
    progression: List[ItemProgression]
    active: bool
    type: str
    current_level: int = Field(alias="currentLevel")


class Item(BaseModel):
    name: str
    image: str
    active: bool
    type: str


class Items(BaseModel):
    __root__: Dict[str, Union[ProgressiveItem, Item]]
