"""Schema file for returning item list"""
from typing import Dict, Optional

from pydantic import BaseModel


class Item(BaseModel):
    id: str
    name: str
    image: str
    type: str
    quantity: Optional[int]


class Items(BaseModel):
    __root__: Dict[str, Item]
