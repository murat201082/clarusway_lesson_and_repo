
from django.urls import path
from .views import home,murat
urlpatterns = [
   
    path('',home, name= "home"),
    path('murat/',murat, name= "home"),
]
