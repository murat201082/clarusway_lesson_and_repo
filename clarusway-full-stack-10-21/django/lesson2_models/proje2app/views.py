from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse("<h1>Welcome Murat Web Page</h1>")


def murat(request):
    return HttpResponse("<h1>Murat Bey Nasılsınız</h1>")