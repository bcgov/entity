from flask_restplus import Resource, Namespace
from service.report_service import ReportService
from flask import Response


api = Namespace('reports', description='Reports System - Report Generation Endpoints')
reportService = ReportService()


@api.route("")
class Batch(Resource):

    @staticmethod
    def get():
        return {"message": "OK"}, 200

    @staticmethod
    def post():
        name = 'simple'
        template_vars = {"title": "My Sample Report"}
        pdf = reportService.create_report(name, template_vars)

        response = Response(pdf)
        response.headers.set('Content-Disposition', 'attachment', filename=name + '.pdf')
        response.headers.set('Content-Type', 'application/pdf')
        return response

