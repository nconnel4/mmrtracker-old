"""API Settings."""
from pydantic import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Majora's Mask Randomizer Tracker"


settings = Settings()
