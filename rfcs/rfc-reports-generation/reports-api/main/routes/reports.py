from flask_restplus import Resource
from main.service.report_service import ReportService
from main.util.dto import ReportRequestDto
from flask import Response, request, abort
from jinja2 import TemplateNotFound
import logging
from ..decorators import timetracker

api = ReportRequestDto.api
reportService = ReportService()
report_request = ReportRequestDto.report_request


@api.route("")
class Report(Resource):

    @api.doc('Creates report using the template and template_vars in incoming request json')
    @api.expect(report_request, validate=True)
    @api.response(201, 'Report successfully created')
    #@api.representation('application/pdf')
    @timetracker.timetracker
    def post(self):
        request_json = request.get_json()
        logging.info('Reports request received {}'.format(request_json))
        template_vars = request_json['template_vars']
        report_name = request_json['report_name']
        pdf = None
        if 'template_name' in request_json: #Ignore template if template_name is present
            template_name = request_json['template_name']
            try:
                pdf = reportService.create_report_from_stored_template(template_name, template_vars)
            except TemplateNotFound as e:
                abort(404)

        elif 'template' in request_json:
            pdf = reportService.create_report_from_template(request_json['template'], template_vars)

        if pdf is not None:
            response = Response(pdf, 201)
            response.headers.set('Content-Disposition', 'attachment', filename='{}.pdf'.format(report_name))
            response.headers.set('Content-Type', 'application/pdf')
            return response
        else:
            abort(400)

