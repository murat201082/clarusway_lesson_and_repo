from django.contrib.auth.models import User
from .models import UserProfile,Post
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.db.models import fields

class  UserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email')
        
class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        exclude = ('user',)
        
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = "__all__"
        




   
    
    
    