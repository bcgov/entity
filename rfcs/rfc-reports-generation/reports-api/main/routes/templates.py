from flask_restplus import Resource, Namespace
from main.service.template_service import TemplateService
from ..decorators import timetracker


api = Namespace('templates', description='Reports System - Template Endpoints')
templateService = TemplateService()


@api.route('/')
class TemplateList(Resource):

    @api.doc('Get list of templates')
    @api.response(200, 'Templates successfully returned')
    @timetracker.timetracker
    def get(self):
        templates = templateService.get_all_templates()
        resp = {'templates': templates}
        return resp, 200

