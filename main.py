from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import pickle

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

print("Type of loaded object:", type(model))
print("Is model object callable?", callable(getattr(model, "predict", None)))

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

