from fetch_readme import fetch_readme 
from check_ai_or_not_ai import check_ai_or_not_ai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={
    r"/getresult": {
        "origins": [
            "http://localhost:5173",
            "https://readme-exposer-frontend.vercel.app"
        ],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})
@app.route("/getresult", methods = ["POST"])
def get_result():
    data = request.get_json()
    url = data["message"]

    readme_content = fetch_readme(url)
    result = check_ai_or_not_ai(readme_content)
    print(result)

    return jsonify({
        "result": result
    })



# url = "https://github.com/Aditya0058/Buy-Me-A-Chai"

# readme_content = fetch_readme(url)
# result = check_ai_or_not_ai(readme_content)

# print(result) # {'Authorship': 'human', 'Project Specific': 0.96, 'Consistency': 0.55}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)