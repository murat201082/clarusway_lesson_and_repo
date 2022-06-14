
from django.urls import path
from .views import home,henry,murat,student

urlpatterns = [
    path('', student, name='student'),
    path('home/', home, name='home'),
    path('login/', henry, name='henry'),
    path('murat/', murat, name='murat')
    
    
]