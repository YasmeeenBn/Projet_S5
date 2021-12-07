from django.shortcuts import render
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from .models import Article, Thematic
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArticleSerializer
from django.http import HttpResponse
from django.http import JsonResponse
import os
import csv
import json
from django.core import serializers
from datetime import datetime
from datetime import timedelta
from openpyxl import Workbook

#get the thematics in Hespress website (society, politics) to use them in the other fct
def thematics_nyt(request):
    req = Request('https://www.nytimes.com/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")
    results = soup.find_all("ul", class_="css-1vxc2sl")
    # #thematic in Nytimes ( society, politics ...)
    thematic = results[0].find_all("a", class_="css-1wjnrbv")
    for th in thematic:
        #Videos and real estate don't have the same structure as the others so we delete them
        if not th.text == 'Video' and not th.text == 'Real Estate' :
            Thematic.objects.get_or_create(
                # we save the name of thematics in the model thematic
                thematic = th.text,
                website =  "https://www.nytimes.com/"
            )
    thematic = Thematic.objects.all()
    context ={
        'thematic': thematic,
    }
    return render(request, 'api/home.html', context)

def newyorktimes(request):
    #scraping for a specific thematic
    All_thematics = Thematic.objects.filter(website = 'https://www.nytimes.com/')
    for th in All_thematics :
        # Link of articles related to each thematic
        url = 'https://www.nytimes.com/section/'
        req = Request(url +th.thematic.lower(), headers={'User-Agent': 'Mozilla/5.0'})
        webpage = urlopen(req).read()
        soup = BeautifulSoup(webpage,"html.parser")
        results = soup.find("div", class_="css-13mho3u")
        articles = results.find_all("li", class_="css-ye6x8s")
        
        # for each article, we bring infos related the way they are written in the website + its thematic
        # for article in articles:
            # Article.objects.get_or_create(
            #     title = article.find("h2", class_="css-1j9dxys e15t083i0").text, 
            #     date = article.find("div", class_="css-1lc2l26 e15t083i3"),
            #     imageUrl=article.find('img').get('src'), 
            #     link = article.find('div', class_="css-1l4spti").get('href'), 
            #     thematic = th.thematic,
            #     website = 'https://www.nytimes.com/'
            # )
        print(articles[0])
        # for article in articles:
        #     print(article.find("span", class_="todays-date"))
            
    articles = Article.objects.all()
    context ={
            'articles': articles,
        }
    return render(request, 'api/home.html', context)