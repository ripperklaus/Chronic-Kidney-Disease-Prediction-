# Chronic Kidney Disease Prediction

A machine learning project to predict chronic kidney disease using patient medical data, with a REST API built using FastAPI.

## 📁 Project Overview

- **Dataset**: UCI Chronic Kidney Disease  
- **API**: FastAPI-based backend for prediction  
- **Accuracy**: ~98%

### 🔢 Model Performance

| Model                          | Accuracy Score |
|-------------------------------|----------------|
| Random Forest Classifier      | 0.975000       |
| Ada Boost Classifier          | 0.975000       |
| Gradient Boosting Classifier  | 0.975000       |
| Stochastic Gradient Boosting  | 0.975000       |
| XGBoost                       | 0.975000       |
| Extra Trees Classifier        | 0.975000       |
| Decision Tree Classifier      | 0.933333       |
| KNN                           | 0.650000       |

## 🛠️ Tech Stack

- Python  
- Scikit-learn  
- Pandas, NumPy  
- FastAPI  
- Uvicorn  

## 🚀 How to Run

```bash
git clone https://github.com/ripperklaus/Chronic-Kidney-Disease-Prediction.git
cd Chronic-Kidney-Disease-Prediction
pip install -r requirements.txt
uvicorn app:app --reload

Visit http://127.0.0.1:8000/docs to test the API.

📊 Features

Multiple ML models with accuracy comparison
FastAPI-powered /predict endpoint
Swagger UI for testing
📌 Author

Udityanshu Pandey
LinkedIn
