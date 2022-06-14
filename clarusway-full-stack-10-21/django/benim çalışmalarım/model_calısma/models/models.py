from django.db import models


# Create your models here.

class Student(models.Model):
    YEAR_IN_SCHOOL_CHOICES = [
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('GR', 'Graduate'),
]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField(blank=True, null=True)
    avatar = models.ImageField(blank=True, null=True, upload_to='media/')
    register_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)
    year_in_school = models.CharField(max_length=3, choices=YEAR_IN_SCHOOL_CHOICES, blank=True)
    
    
    
    def __str__(self):
        return f"{self.first_name} - {self.last_name} - {self.number}"
    
    class Meta:
        ordering = ["number"]
        verbose_name_plural = "öğrenciler" 
