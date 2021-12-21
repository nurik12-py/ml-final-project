from flask import Flask, request
app = Flask(__name__)


@app.route('/', methods=["POST"])
def hello_world():
    review = request.get_json()

    # send review to ml
    # get some metrics
    data = {
        "overallPercent": 99.1,
        "overallStatus": 2,
        "posPersent": 91.1,
        "netPersent": 20.6,
        "negPersent": 30.4
    }
    print(review['review'])
    return data


if __name__ == '__main__':
    app.run(debug=True)
