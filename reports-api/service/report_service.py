from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('.'))


class ReportService:

    @staticmethod
    def create_report(template: str, template_args: object):
        template = env.get_template('templates/{}.html'.format(template))
        html_out = template.render(template_args)
        pdf_out = HTML(string=html_out).write_pdf()
        return pdf_out
