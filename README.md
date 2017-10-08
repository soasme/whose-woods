# Worklog

Help me track my daily work & life events.

* Record events in hour basis.
* Easy record from any device.
* Quickly Search by keywords.
* Filter by tags.

## Start

pipenv

flask, flask-sqlalchemy, gunicorn
export FLASK_APP=worklog.py
export FLASK_DEBUG=1
flask run

curl http://127.0.0.1:5000/api/1/records -H"Authorization: Bearer 098f6bcd4621d373cade4e832627b4f6"

curl http://127.0.0.1:5000/api/1/records -H"Authorization: Bearer 098f6bcd4621d373cade4e832627b4f6" -X POST -d'{"content":"helloworld","tags":["work"]}' -H"Content-Type: application/json"

curl http://127.0.0.1:5000/api/1/records/1 -H"Authorization: Bearer 098f6bcd4621d373cade4e832627b4f6" -X PUT -d'{"content":"hello, world","tags":["work"]}' -H"Content-Type: application/json"
