from distutils.command.upload import upload
from django.db import models

# Create your models here.
class Student(models.Model):
    
    YEAR_IN_SCHOOL_CHOICES = [
        ("FR", 'Freshman'),
        ("SP", 'Sophomore'),
        ("JR", 'Junior'),
        ("SR", 'Senior'),
        ("GRD", 'Graduate'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField(null=True, blank=True)
    avatar = models.ImageField(null=True, blank=True, upload_to='media/')
    register_date = models.DateTimeField(auto_now=True)
    update_date = models.DateTimeField(auto_now=True)
    year_in_school = models.CharField(max_length=3, choices=YEAR_IN_SCHOOL_CHOICES, default="FR")



    def __str__(self):
        return f"{self.first_name} {self.last_name}"


    class Meta:
          ordering = ["number"]
          verbose_name_plural = "Öğrenciler"
    
    
        #! CASCAADE  - parent silinince silinir
#! SET_NULL  - parent silinince null yapar
#! PROTECT   - parent silinince hata verir
#! DO_NOTHING - parent silinince hiçbir şey yapmaz
#! SET_DEFAULT - parent silinince default değer atar

from django.contrib import admin
from .models import Creator, Language

admin.site.register(Creator)
admin.site.register(Language)

# Register your models here.

class Frameworks(models.Model):
    name = models.CharField(max_length=50)
    Language = models.ForeignKey(Language, on_delete=models.CASCADE)

    