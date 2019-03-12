from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader, Template
import base64

env = Environment(loader=FileSystemLoader('.'))


class ReportService:

    @staticmethod
    def create_report_from_stored_template(template: str, template_args: object):
        template = env.get_template('main/templates/{}.html'.format(template))
        html_out = template.render(template_args)
        pdf_out = HTML(string=html_out).write_pdf()
        return pdf_out

    @staticmethod
    def create_report_from_template(template_string: str, template_args: object):
        template_decoded = base64.b64decode(template_string).decode('utf-8')
        template_ = Template(template_decoded)
        html_out = template_.render(template_args)
        pdf_out = HTML(string=html_out).write_pdf()
        return pdf_out
