from flask_restplus import Resource, Namespace
from service.report_service import ReportService
from flask import Response, request, abort
from jinja2 import TemplateNotFound

api = Namespace('reports', description='Reports System - Report Generation Endpoints')
reportService = ReportService()


@api.route("/<template_name>")
@api.param('template_name', 'Name of the template')
class Report(Resource):

    @api.doc('Create a report for the template')
    @api.expect(object, validate=True)
    @api.response(201, 'Report successfully created')
    @api.response(404, 'Template Not Found')
    def post(self, template_name):
        template_vars = request.data
        try:
            pdf = reportService.create_report(template_name, template_vars)
            response = Response(pdf, 201)
            response.headers.set('Content-Disposition', 'attachment', filename='{}.pdf'.format(template_name))
            response.headers.set('Content-Type', 'application/pdf')
            return response
        except TemplateNotFound as e:
            abort(404)

