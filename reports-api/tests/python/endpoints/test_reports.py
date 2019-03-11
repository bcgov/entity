import json
import base64


def test_generate_report_with_existing_template(client):
    # Call to generate report with existing template
    rv = client.get('/reports-api/v1/templates/')
    template_name = rv.json['templates'][0]
    assert template_name is not None
    request_url = '/reports-api/v1/reports/{}'.format(template_name)
    request_data = {
        "title": "This is a sample request"
    }
    rv = client.post(request_url, data=json.dumps(request_data), content_type="application/json")
    assert rv.status_code == 201
    assert rv.content_type == 'application/pdf'


def test_generate_report_with_invalid_template(client):
    # Call to generate report with invalid template
    template_name = 'some-random-text-to-fial-generation'
    request_url = '/reports-api/v1/reports/{}'.format(template_name)
    request_data = {
        "title": "This is a sample request"
    }
    rv = client.post(request_url, data=json.dumps(request_data), content_type="application/json")
    assert rv.status_code == 404


def test_generate_report_with_template(client):
    # Call to generate report with new template
    template = '<html><body><h1>Sample Report</h1><h2>{{ title }}</h2></body></html>'
    template = base64.b64encode(bytes(template, 'utf-8')).decode('utf-8')
    request_url = '/reports-api/v1/reports'
    request_data = {
        "template": template,
        "template_vars": {
            "title": "This is a sample request"
        },
        "report_name" : "Test Report"
    }
    rv = client.post(request_url, data=json.dumps(request_data), content_type="application/json")
    assert rv.status_code == 201
    assert rv.content_type == 'application/pdf'

