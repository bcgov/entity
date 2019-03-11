from flask import Flask
from main.routes import api
import os


def create_app(run_mode=os.getenv('FLASK_ENV', 'production')):

    app = Flask(__name__)

    api.init_app(app)

    return app



