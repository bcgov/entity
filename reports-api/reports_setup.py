from flask import Flask
from flask_jwt_oidc import JwtManager
from routes import api

jwt = JwtManager()


def create_app():

    app = Flask(__name__)

    api.init_app(app)
    setup_jwt_manager(app, jwt)

    register_shellcontext(app)

    return app


def setup_jwt_manager(app, jwt):
    def get_roles(a_dict):
        return a_dict['realm_access']['roles']
    app.config['JWT_ROLE_CALLBACK'] = get_roles

    jwt.init_app(app)

    return


def register_shellcontext(app):
    """Register shell context objects."""
    def shell_context():
        """Shell context objects."""
        return {
            'app': app,
            'jwt': jwt}

    app.shell_context_processor(shell_context)

