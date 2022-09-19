"""Tests for item routes"""
import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture(name="client")
def client_fixture():
    client = TestClient(app)
    yield client


def test_get_items(client: TestClient):
    response = client.get("/api/v1/items")

    assert response.status_code == 200
    assert response.json().get("kokiriSword") == {
        "id": "sword",
        "name": "Kokiri Sword",
        "image": "kokiriSword",
        "type": "item",
        "quantity": None,
    }
