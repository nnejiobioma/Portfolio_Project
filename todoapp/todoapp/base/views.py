from django.shortcuts import render

# Create your views here.
# Rendering pages
# Views take in request or a template

def home(request):
    return render(request, 'base/home.html')
