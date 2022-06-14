from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from PIL import Image


# Create your models here.
class UserProfile(models.Model):
   
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=125, blank=False)
    Email_adress = models.EmailField(blank=True)
    image = models.ImageField(upload_to='profile_pics', blank=False, default = 'user.jpg' )
    Bio = models.TextField()
    
    
    def __str__(self):
        return f'{self.user.username} Profile' #show how we want it to be displayed
    

    
    
    def save(self):
       super().save()
       img = Image.open(self.image.path) # Open image
       
       # resize image
       if img.height > 300 or img.width > 300:
           output_size = (300, 300)
           img.thumbnail(output_size) # Resize image
           img.save(self.image.path) # Save it again and override the larger image



# Create your models here.
class Post(models.Model):
    
    CATEGORY = (
        ("1", "Frontend"),
        ("2", "Backend"),
        ("3", "Fullstack"),
    )
    category = models.CharField(max_length=10, choices=CATEGORY)
    STATUS = (
        ("1", "Draft"),
        ("2", "Published"),
        
    )
    status = models.CharField(max_length=10, choices=STATUS)
    
 
    title = models.CharField(max_length=100)
    Content = models.TextField(max_length=400, blank=False)
    image = models.ImageField(upload_to="profile_pics", default='profile_pics\muhabbet_kuşu.jpg')
    # Category = models.CharField(max_length=10, blank=False , choices=LESSONS)
    # Status = models.CharField( max_lenght=10, blank=False , choices=STATUS)
    

    def __str__(self):
        return  f'{self.title} {self.Content} '

    
    
