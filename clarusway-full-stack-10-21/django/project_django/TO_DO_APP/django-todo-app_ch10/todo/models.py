from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    
    isCompleted = models.BooleanField(default=False)
    
    PRIORITY = (
        ("1", "High"),
        ("2", "Medium"),
        ("3", "Low"),
    )
    priority = models.CharField(max_length=10, choices=PRIORITY)
    
    created_date = models.DateTimeField(auto_now=True)
    update_date = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.title