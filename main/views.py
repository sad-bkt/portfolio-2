from django.shortcuts import render, redirect
from .models import Photoshoot
from .forms import PhotoshootForm

def index(request):
    return render(request, 'main/index.html')


def portfolio(request):
    return render(request, 'main/portfolio.html')


def faq(request):
    return render(request, 'main/FAQ.html')


def tariffs(request):
    error = ''
    if request.method == 'POST':
        form = PhotoshootForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('photoshoots')
        else:
            error = 'Форма неверно заполнена'
    form = PhotoshootForm()
    context = {
        'form': form,
        'error': error
    }
    return render(request, 'main/tariffs.html', context)


def registration_photoshoot(request):
    return render(request, 'main/registration-photoshoot.html')
'''
def tariffs(request):
    return render(request, 'main/tariffs.html')

def registration_photoshoot(request):
    error = ''
    if request.method == 'POST':
        form = PhotoshootForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            error = 'Форма неверно заполнена'
    form = PhotoshootForm()
    context = {
        'form': form,
        'error': error
    }
    return render(request, 'main/registration-photoshoot.html', context)
'''
def photoshoots(request):
    ph = Photoshoot.objects.all()
    return render(request, 'main/photoshoots.html', {'title': 'Табличка:', 'ph_table': ph})
