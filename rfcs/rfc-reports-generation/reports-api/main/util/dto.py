from flask_restplus import Namespace, fields


class ReportRequestDto:
    api = Namespace('reports', description='Reports System - Report Generation Endpoints')
    report_request = api.model('ReportRequest', {
        'template': fields.String(description='Base64 encoded HTML template'),
        'template_name': fields.String(description='Name of the template'),
        'template_vars': fields.Raw(required=True, description='JSON payload to replace the variables in template'),
        'report_name': fields.String(required=True, description='Name of the report')
    })


