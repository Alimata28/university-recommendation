from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://universitiesrecommender.netlify.app/"}})


def load_university_data():
    # Load CSV file with correct separator
    file_path = os.path.join(os.path.dirname(__file__), 'universities.csv')
    df = pd.read_csv(file_path, sep=';', encoding='latin1')
    
    # Print column names for debugging
    print("Columns in CSV file:", df.columns)
    
    # Ensure that the values ​​in the 'Department' column are split into lists
    df['Department'] = df['Department'].apply(lambda x: x.split(','))
    return df

universities_data = load_university_data()

@app.route('/')
def home():
    return "Welcome to the College Recommendation API !"

@app.route('/api/endpoint/recommend', methods=['GET'])
def recommend_universities():
    department = request.args.get('department')
    
    if not department:
        return jsonify({"error": "Department parameter is required"}), 400

    # Filter universities by checking if the department is in the 'Department' list
    filtered_universities = universities_data[universities_data['Department'].apply(lambda x: any(department.lower() in dept.lower() for dept in x))]

    # If no university matches the department, return an appropriate message
    if filtered_universities.empty:
        return jsonify({"message": "No universities found for the specified department."}), 404

    results = filtered_universities[['University', 'City', 'Tuition_fee', 'Website']].to_dict(orient='records')
    return jsonify(results)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

