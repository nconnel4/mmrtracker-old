"""Tests for ping routes"""
import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture(name="client")
def client_fixure():
    client = TestClient(app)
    yield client


def test_ping(client: TestClient):
    response = client.get("/api/v1/ping")

    assert response.status_code == 200
    assert response.json() == {"message": "pong!"}
