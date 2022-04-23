
from flask import Flask
from flask_cors import CORS
import obd
import logging

app = Flask(__name__)
CORS(app)
logging.getLogger().setLevel(logging.DEBUG)

@app.route("/")
def hello_world():
    return {"message":"hey there"}

@app.route("/metrics")
def metrics():
    app.logger.info("Logging")
    return {
        "rpm": 2000,
        "speed": 50
    }

#def main():   
    # app.logger.info("Logging")
    #c = obd.commands.RPM
    #print(c)
    # connection = obd.OBD()

#main()