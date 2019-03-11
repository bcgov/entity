
def test_get_all_templates(client):
    # Call the get templates endpoint
    rv = client.get('/reports-api/v1/templates/')
    assert b'"PaymentReceipt_v1"' in rv.data
    assert 'PaymentReceipt_v1' in rv.json['templates']
    assert 'PaymentReceipt_v2' in rv.json['templates']
    assert rv.status_code == 200


