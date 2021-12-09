from django.shortcuts import render


def homepage(request):
  return render(request, 'pages/index.html', context={})


def aboutpage(request):
  return render(request, 'pages/about.html', context={})