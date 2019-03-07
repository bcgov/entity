from flask import Flask
from routes import api


def create_app():

    app = Flask(__name__)

    api.init_app(app)

    return app



