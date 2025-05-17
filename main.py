from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
import pickle  # ✅ Add this line

# Load the model
with open("kidney_model.pkl", "rb") as f:
    model = pickle.load(f)


app = FastAPI()

# Define input data format
class KidneyData(BaseModel):
    age: float
    bp: float
    sg: float
    al: float
    su: float
    rbc: int
    pc: int
    pcc: int
    ba: int
    bgr: float
    bu: float
    sc: float
    sod: float
    pot: float
    hemo: float
    pcv: int
    wc: int
    rc: float
    htn: int
    dm: int
    cad: int
    appet: int
    pe: int
    ane: int


with open("kidney_model.pkl", "rb") as f:
    model = pickle.load(f)





app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ckd-b3yt2tulr-ripperklaus-projects.vercel.app"],  # or your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(data: KidneyData):
    try:
        input_data = np.array([[value for value in data.dict().values()]])
        prediction = model.predict(input_data)[0]
        return {"prediction": "CKD" if prediction == 1 else "Not CKD"}
    except Exception as e:
        return {"error": str(e)}


@app.get("/")
def read_root():
    return {"message": "CKD Prediction API is running!"}

