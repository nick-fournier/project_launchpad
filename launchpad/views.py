from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.conf import settings
from django.urls import get_resolver

# Create your views here.
# def index(request):
#     return HttpResponseRedirect("https://www.nicholasfournier.com/#portfolio")


class IndexView(TemplateView):
    template_name = 'index.html'
    
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
        
    #     'portfolio-optimizer'
    #     get_resolver().url_patterns[1]
        
    #     settings.INSTALLED_APPS
            
    #     return context