from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import numpy as np

app = Flask(__name__)
CORS(app)

# MongoDB Atlas Connection
client = MongoClient(
    "mongodb+srv://chokwalakishan:j2VuzvCahpBKcYU2@cluster0.ko2os9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

print("Connected to MongoDB Atlas Successfully!")

# Database + Collection
db = client["Tourist"]
collection = db["destination"]

# Category Mapping
budget_map = {
    "Low": 0,
    "Medium": 1,
    "High": 2
}

family_map = {
    "Yes": 1,
    "No": 0
}

# Distance Function
def euclidean_distance(a, b):
    return np.sqrt(np.sum((a - b) ** 2))

@app.route('/recommend', methods=['POST'])
def recommend():

    try:

        data = request.json

        print("Incoming User Request:")
        print(data)

        # User Inputs
        user_budget = data.get("budget")
        frontend_to_db_type = {

            "Beach & Coastal": "Beach",
            "Adventure": "Adventure",
            "Historical / Heritage": "Historical",
            "Spiritual / Pilgrimage": "Spiritual",
            "Hill Station & Nature": "Adventure",
            "Wildlife Safari": "Adventure"
        }

        user_travel = frontend_to_db_type.get(
            data.get("travelType"),
            data.get("travelType")
        )
        user_duration = int(data.get("duration"))
        user_family = data.get("family")
        user_season = data.get("season")

        # User Vector
        user_vector = np.array([
            budget_map.get(user_budget, 1),
            user_duration,
            family_map.get(user_family, 1),
            8
        ])

        # Fetch Destinations
        destinations = list(collection.find())

        print(f"Total Destinations Loaded: {len(destinations)}")

        results = []

        for dest in destinations:

            try:

                # Safe field extraction
                travel_type = dest.get("travel_type")
                family = dest.get("family_friendly")
                season = dest.get("best_season")

                # STRICT FILTERING

                # Travel Type must match
                if travel_type != user_travel:
                    continue

                # Family preference must match
                if family != user_family:
                    continue

                # Destination Vector
                dest_vector = np.array([
                    budget_map.get(dest.get("budget_category"), 1),
                    int(dest.get("duration_days", 1)),
                    family_map.get(family, 1),
                    int(dest.get("popularity_score", 5))
                ])

                # Distance
                dist = euclidean_distance(user_vector, dest_vector)

                # Base Similarity
                similarity = (1 / (1 + dist)) * 100

                # Season Bonus
                if season == user_season:
                    similarity += 10

                # Popularity Bonus
                similarity += int(dest.get("popularity_score", 5))

                # Final Score Cap
                similarity = min(round(similarity), 99)

                # Append Results
                results.append({
                    "name": dest.get("destination_name"),
                    "best_season": season,
                    "estimated_cost": dest.get("estimated_cost"),
                    "description": dest.get("description"),
                    "match_score": similarity,
                    "travel_type": travel_type,
                    "family_friendly": family
                })

            except Exception as inner_error:

                print("Skipping Destination:")
                print(inner_error)

                continue

        # Sort by Match Score
        results.sort(
            key=lambda x: x['match_score'],
            reverse=True
        )

        print("Final Recommendations:")
        print(results[:3])

        return jsonify(results[:3])

    except Exception as e:

        print("ERROR OCCURRED:")
        print(e)

        return jsonify({
            "error": str(e)
        }), 500

if __name__ == '__main__':

    app.run(
        debug=True,
        port=8000,
        use_reloader=False
    )