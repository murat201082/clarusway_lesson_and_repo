from django.urls import path
from .views import user_logout, register,user_login,profile,post_form


urlpatterns = [
    path('logout/',user_logout, name='logout'),
    path('login/', user_login, name='user_login'),
    path('register/', register, name='register'),
    path('profile/', profile, name='profile'),
    path('add_post/',post_form, name='post_form'),
    path('home/',post_form, name='home')
   
    
]


