from django.urls import path
from .views import index, Student_add, Student_list, Student_update, student_delete, student_detail 

urlpatterns = [
    path('', index, name='home'),
    path('list/', Student_list, name='list'),
    path('add/', Student_add, name='add'),
    path('update/<int:id>', Student_update, name='update'),
    path('delete/<int:id>', student_delete, name='delete'),
    path('student/<int:id>', student_detail, name='detail'),
   
]
