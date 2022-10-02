from flask import Flask, request, render_template, jsonify, request, abort
from travel_recommender_api import suggest

app = Flask(__name__)


@app.route("/predict", methods=['POST'])
def make_prediction():
        description = request.json['description']
        response = suggest(description)

        return jsonify(response)
 


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=False)
