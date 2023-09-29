from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('index.html',views.index,name='index'),
    path('disease-detector.html', views.disease_detector, name="Disease Detector"),
    path('grape-disease.html', views.grapedisease, name="Grape disease"),
    path('fungal-disease.html', views.fungaldisease, name="Fungal disease"),
    path('tomato-bacteria.html', views.tomatobacteria, name="Tomato Bacteria")
]
