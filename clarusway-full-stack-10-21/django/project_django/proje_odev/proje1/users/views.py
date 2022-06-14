
from django.shortcuts import render, redirect, HttpResponse

from django.contrib import messages
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserForm, UserProfileForm,PostForm
from django.views.generic import ListView,DetailView

from .models import Post


from django.contrib.auth.models import User

def home(request):
    return render(request, 'users/home.html')

def user_logout(request):
    messages.success(request, 'You logged out!')
    logout(request)
    return redirect('home')

         
def register(request):
    form_user = UserForm()
   
    if request.method == 'POST':
        form_user = UserForm(request.POST)
       
        if form_user.is_valid():
            user = form_user.save()
         
            
            login(request, user)
            messages.success(request,'register succesfully')
            
            return redirect('home')
            
            

    context = {
        "form_user": form_user,
        
    }

    return render(request, 'users/register.html',context)
            
    
            

  


def user_login(request):
   form = AuthenticationForm(request, data=request.POST)
   if form.is_valid():
    #    username = form.cleaned_data.get('username')
    #    password = form.cleaned_data.get('password')
    #    user = authenticate(username = username, password = password)
       user = form.get_user()
       if user:
            messages.success(request, 'login successfully')
            login(request, user)
            return redirect('home')
       else:
           messages.error(request, 'login failed')
           return redirect('register')
   
   return render(request, 'users/user_login.html', {"form":form} )


def profile(request):
          
    form_profile = UserProfileForm(instance=request.user)
   
    
    if request.method == 'POST':
        form_profile = UserProfileForm(request.POST,request.FILES,instance=request.user)
        if form_profile.is_valid():
            form_profile.save()
            messages.success(request, 'updated successfully')
            return redirect('home')
        
    #     userrecognizeform = UserRecognizeForm(request.POST,request.FILES,instance=userrecognize)
        
    #     if userrecognizeform.is_valid():
    #         userrecognizeform.save()
    #         messages.success(request, 'update successfully')
    #         return redirect('home')
    context = {
        
        "formprofile": form_profile,
               
         }
    return render(request, 'users/profile.html',context)

def post_form(request):
        form_post = PostForm()  
    
        if request.method == 'POST':
            form_post = PostForm(request.POST,request.FILES) 
            if form_post.is_valid():
                form_post.save()
                messages.success(request, 'posted successfully')

                Title = form_post.cleaned_data.get('title')
                Content = form_post.cleaned_data.get('Content')
                image = form_post.cleaned_data.get('image')
                
                
                context = {
                    "title": Title,
                    "content": Content,
                    "image": image,
                    }
                return render(request, 'users/home.html',context)
                    
                 
                
                
                
                
      
        context = {

            "form_post": form_post,
            

             }
                
        
        return render(request, 'users/add_post.html',context)




               

  
    

   
        
    
    
    