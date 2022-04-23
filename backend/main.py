
from flask import Flask
from flask_cors import CORS
import obd
import logging
import random

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
        "rpm": random.randint(1000,10000),
        "speed": random.randint(0, 200)
    }

#def main():   
    # app.logger.info("Logging")
    #c = obd.commands.RPM
    #print(c)
    # connection = obd.OBD()

#main()