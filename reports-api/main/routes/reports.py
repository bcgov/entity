from flask_restplus import Resource
from main.service.report_service import ReportService
from main.util.dto import ReportRequestDto
from flask import Response, request, abort
from jinja2 import TemplateNotFound
import logging

api = ReportRequestDto.api
reportService = ReportService()
report_request = ReportRequestDto.report_request


@api.route("")
class Report(Resource):

    @api.doc('Creates report using the template and template_vars in incoming request json')
    @api.expect(report_request, validate=True)
    @api.response(201, 'Report successfully created')
    #@api.representation('application/pdf')
    def post(self):
        request_json = request.get_json()
        logging.info('Reports request received {}'.format(request_json))
        pdf = reportService.create_report_from_template(request_json['template'], request_json['template_vars'])
        response = Response(pdf, 201)
        report_name = '{}.pdf'.format(request_json['report_name'])
        response.headers.set('Content-Disposition', 'attachment', filename=report_name)
        response.headers.set('Content-Type', 'application/pdf')
        return response


@api.route("/<template_name>")
@api.param('template_name', 'Name of the template')
class Report(Resource):

    @api.doc('Creates report for the template with the template_name using incoming request json')
    @api.expect(object, validate=True)
    @api.response(201, 'Report successfully created')
    @api.response(404, 'Template Not Found')
    #@api.representation('application/pdf')
    def post(self, template_name):
        template_vars = request.get_json()
        try:
            pdf = reportService.create_report_from_stored_template(template_name, template_vars)
            response = Response(pdf, 201)
            response.headers.set('Content-Disposition', 'attachment', filename='{}.pdf'.format(template_name))
            response.headers.set('Content-Type', 'application/pdf')
            return response
        except TemplateNotFound as e:
            abort(404)



