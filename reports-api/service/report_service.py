from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('.'))


class ReportService:

    @staticmethod
    def create_report(template : str, input : object):
        template = env.get_template('templates/'+template+".html")
        html_out = template.render(input)
        pdf_out = HTML(string=html_out).write_pdf("report.pdf")
        return pdf_out
