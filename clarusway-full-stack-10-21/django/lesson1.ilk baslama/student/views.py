from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1 >Home</h1>")
def my_site(request):
    return HttpResponse("<h1 >Hello this is my site</h1>")
def henry(request):
    return HttpResponse("<h1 >Login penceresi burası değil:)</h1>")
def murat(request):
    return HttpResponse("<h1 >Merhaba ben Murat:))</h1>")
def student(request):
    return HttpResponse("<h1 >Burası Öğrenciler Bölgesi uzak durun</h1>")

