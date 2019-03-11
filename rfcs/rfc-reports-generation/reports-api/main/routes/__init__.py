from flask_restplus import Api
from .reports import api as reports_api
from .templates import api as templates_api

api = Api(
    title='Reports API',
    version='1.0',
    description='API for the Reports System',
    prefix='/reports-api/v1')


api.add_namespace(reports_api, path='/reports')
api.add_namespace(templates_api, path='/templates')


