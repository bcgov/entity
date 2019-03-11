import pytest

from reports_setup import create_app


@pytest.fixture(scope="session")
def app():
    """
    Returns session-wide application.
    """
    app = create_app('testing')

    return app


@pytest.fixture(scope="session")
def client(app):
    """
    Returns session-wide Flask test client.
    """
    return app.test_client()


