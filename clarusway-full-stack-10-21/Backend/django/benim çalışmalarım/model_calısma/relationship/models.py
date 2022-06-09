from tkinter import CASCADE
from turtle import mode
from django.db import models

# Create your models here.
class Creator(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
class Language(models.Model):
    name = models.CharField(max_length=50)
    creator = models.OneToOneField(Creator, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    
    # CASCADE
    # SET_NULL
    # SET_DEFAULT
    # DO_NOTHING
    # PROTECT
    
class Framework(models.Model):
    name = models.CharField(max_length=40)
    language = models.ForeignKey(Language, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.name


class Developer(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    framework = models.ManyToManyField(Framework)
    
    def __str__(self):
        return self.first_name + " " + self.last_name
    
