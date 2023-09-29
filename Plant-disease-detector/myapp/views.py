import os
import cv2
import json
import numpy as np
from django.conf import settings
from django.shortcuts import render
from tensorflow.keras.models import load_model
from django.core.files.storage import FileSystemStorage
from keras.preprocessing.image import load_img, img_to_array

categories = ['Pepper_bell_Bacterial_spot',
 'Pepper_bell_healthy',
 'Potato_Early_blight',
 'Potato_healthy',
 'Potato_Late_blight',
 'Tomato_Bacterial_spot',
 'Tomato_Early_blight',
 'Tomato_healthy',
 'Tomato_Late_blight',
 'Tomato_Leaf_Mold',
 'Tomato_Septoria_leaf_spot',
 'Tomato_Spider_mites_Two_spotted_spider_mite',
 'Tomato_Target_Spot',
 'Tomato_Tomato_mosaic_virus',
 'Tomato_Tomato_YellowLeaf_Curl_Virus',
]

def index(request):
    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']
        fs = FileSystemStorage()
        filename = fs.save(uploaded_image.name, uploaded_image)
        image_url = os.path.join(settings.MEDIA_ROOT, filename)

        # image_url = fs.url(filename)
        result = model_prediction(image_url)
        disease_name = list(result.keys())
        with open('media\model_data\plant_diseases_details.json', 'r', encoding='utf-8', errors='ignore') as json_file:
            details = json.load(json_file)
        prediction_details = {}
        for name in disease_name:
            prediction_details[name] = details[name]
        context={
            'prediction_details':prediction_details
        }
        return render(request,'index.html',context)
        
    return render(request,'index.html')

def model_prediction(image_url):
    model= load_model('media\model_data\plant_leaf_diseases_model.h5')
    image = load_img(image_url)
    x = img_to_array(image)
    x = cv2.resize(x, (256, 256), interpolation=cv2.INTER_AREA)
    x /= 255
    x = np.expand_dims(x, axis=0)
    image = np.vstack([x])
    prediction = model.predict(image)[0]
    print(prediction)
    class_probabilities = {class_name: prob for class_name, prob in zip(categories, prediction)}
    formatted_class_probabilities = {class_name: "{:.2f}".format(prob) for class_name, prob in class_probabilities.items() if prob >= 0.50}
    return formatted_class_probabilities


def disease_detector(request):
    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']
        fs = FileSystemStorage()
        filename = fs.save(uploaded_image.name, uploaded_image)
        image_url = os.path.join(settings.MEDIA_ROOT, filename)

        # image_url = fs.url(filename)
        result = model_prediction(image_url)
        disease_name = list(result.keys())
        with open('media\model_data\plant_diseases_details.json', 'r', encoding='utf-8', errors='ignore') as json_file:
            details = json.load(json_file)
        prediction_details = {}
        for name in disease_name:
            prediction_details[name] = details[name]
        context={
            'prediction_details':prediction_details
        }
        return render(request, 'disease-detector.html', context)
    
    return render(request, 'disease-detector.html',{})

def grapedisease(request):
    return render(request, 'grape-disease.html', {})

def fungaldisease(request):
    return render(request, 'fungal-disease.html', {})

def tomatobacteria(request):
    return render(request, 'tomato-bactrial.html', {})