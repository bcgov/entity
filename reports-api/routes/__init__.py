from flask_restplus import Api
from .reports import api as reports_api

api = Api(
    title='Reports API',
    version='1.0',
    description='API for the Reports System',
    prefix='/api/v1')



api.add_namespace(reports_api, path='/reports')


