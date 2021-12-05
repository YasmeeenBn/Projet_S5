from django.shortcuts import render
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from .models import Article
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArticleSerializer
from django.http import HttpResponse
from django.http import JsonResponse
import os
import csv
import json
from django.core import serializers


def home(request):
    req = Request('https://en.hespress.com/society/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")
    results = soup.find(id="listing")
    articles = results.find_all("div", class_="cover")

    for article in articles:
        Article.objects.get_or_create(title = article.find("h3", class_="card-title").text, date = article.find("small", class_="time").text, imageUrl=article.find('img').get('src'), link = article.find('a', class_='stretched-link').get('href'))
    
    articles = Article.objects.all()

    context ={
        'articles': articles,
    }
    return render(request, 'api/home.html', context)

def export_csv(request):
    response = HttpResponse(content_type='text/csv')

    writer = csv.writer(response)
    writer.writerow(['title', 'date', 'imageUrl', 'link'])

    for article in Article.objects.all().values_list('title', 'date', 'imageUrl', 'link'):
        writer.writerow(article)

    response['Content-Disposition'] = 'attachment; filename="articles.csv"'

    return response

def export_json(request):

    response = list(Article.objects.values())

    return JsonResponse(response,safe= False )

def export_xml(request):
    articles = Article.objects.all()
    articles = serializers.serialize('xml', articles) 
    return HttpResponse(articles,content_type="application/xml")
    
# def export_xml(request):
#     articles = Article.objects.all()
#     articles = serializers.serialize('rss', articles) 
#     return HttpResponse(articles,content_type="application/rss")




@api_view(['GET'])
def articleList(request):
    req = Request('https://en.hespress.com/society/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")
    results = soup.find(id="listing")
    articles = results.find_all("div", class_="cover")

    for article in articles:
        Article.objects.get_or_create(title = article.find("h3", class_="card-title").text, date = article.find("small", class_="time").text, imageUrl=article.find('img').get('src'))

    articles = Article.objects.all()
    serilizer = ArticleSerializer(articles, many=True) #json
    return Response(serilizer.data)