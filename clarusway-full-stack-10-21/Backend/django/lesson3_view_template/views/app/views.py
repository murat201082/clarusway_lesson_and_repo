from django.shortcuts import render
from django.http import HttpResponse

def home(request):
   
    return HttpResponse("<h1>Hello World!</h1>")


def special(request):
    context = {
        'title': 'clarusway',
        'dict1': {'django': 'best framework'},
        'my_list': [2, 3, 4]
    }
    return render(request, 'app/special.html', context)

def manzara(request):
    
    icerik = {
        'okul' : ['Erciyes', 'Tekden', 'Kadir Has'],
        'ev' : 'Kayseri'
        
    }
    return render(request, 'app/manzara.html',icerik)
