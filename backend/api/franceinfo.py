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
import re

#get the thematics in france info website (society, politics) to use them in the other fct
def thematicsfranceinfo(request):
    req = Request('https://www.francetvinfo.fr/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")
    results = soup.find(id="topMenu")
    # print(results)
    # #thematic in Hespress ( society, politics ...)
    thematic = results.find_all("li", class_="has-submenu")
    li = thematic[0].find_all("a")
    for th in li:
        try:
            if "FTVi.countClick('header::nav::.*');" == th['onclick']:    # if onclick attribute exist, it will match for searchDB, if success will print
               print (th) # here you can do your stuff instead of print
            
        except:pass
        
    for th in li:
        Thematic.objects.get_or_create(
            thematic = th.text,   
            website = "https://www.francetvinfo.fr/"
        )
    thematic = Thematic.objects.all()
    context ={
        'thematic': thematic,
    }
    return render(request, 'api/home.html', context)

def franceinfo(request):
    #scraping for a specific thematic
    All_thematics = Thematic.objects.all()
    for th in All_thematics :
        # Link of articles related to each thematic
        website = 'https://en.hespress.com/'
        req = Request(website +th.thematic.lower()+'/', headers={'User-Agent': 'Mozilla/5.0'})
        webpage = urlopen(req).read()
        soup = BeautifulSoup(webpage,"html.parser")
        results = soup.find(id="listing")
        articles = results.find_all("div", class_="cover")
        #for each article, we bring infos related the way they are written in the website + its thematic
        for article in articles:
            Article.objects.get_or_create(
                title = article.find("h3", class_="card-title").text, 
                date = article.find("small", class_="time").text, 
                imageUrl=article.find('img').get('src'), 
                link = article.find('a', class_='stretched-link').get('href'),
                thematic = th.thematic,
                website = website
            )
        articles = Article.objects.all()
        context ={
            'articles': articles,
        }
    return render(request, 'api/home.html', context)