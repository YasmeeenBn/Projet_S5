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
def thematicsHespress(request):
    req = Request('https://en.hespress.com/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage,"html.parser")
    results = soup.find_all("ul", class_="nav")
    # #thematic in Hespress ( society, politics ...)
    thematic = results[0].find_all("a", class_="nav-link")
    for th in thematic:
        #Videos and mena don't have the same url as the name of the thematic so we delete them
        if not th.text == 'Videos' and not th.text == 'MENA' :
            Thematic.objects.get_or_create(
                #we save the name of thematics in the model thematic
                thematic = th.text,
                website =  "https://en.hespress.com/"
            )
    thematic = Thematic.objects.all()
    context ={
        'thematic': thematic,
    }
    return render(request, 'api/home.html', context)

def hespress(request):
    #scraping for a specific thematic
    All_thematics = Thematic.objects.filter(website = 'https://en.hespress.com/')
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
                imageUrl = article.find('img').get('src'), 
                link = article.find('a', class_='stretched-link').get('href'),
                thematic = th.thematic,
                website = website
            )
    articles = Article.objects.all()
    context ={
            'articles': articles,
        }
    return render(request, 'api/home.html', context)

def hespress_test(request):
    #scraping for a specific thematic
    variable = Variable.objects.all()
    All_thematics = Thematic.objects.filter(website = 'https://en.hespress.com/')
    for th in All_thematics :
        # Link of articles related to each thematic
        if var_website == 'https://en.hespress.com/' :
            req = Request(website +th.thematic.lower()+'/', headers={'User-Agent': 'Mozilla/5.0'})
            webpage = urlopen(req).read()
            soup = BeautifulSoup(webpage,"html.parser")
            results = soup.find(id="listing")
            articles = results.find_all("div", class_="cover")
            #for each article, we bring infos related the way they are written in the website + its thematic
            for article in articles:
                Article.objects.get_or_create(
                    website =  soup.select(variable.var_website),
                    link = soup.select(variable.var_link),
                    title = soup.select(variable.var_title).text,
                    date = soup.select(variable.var_date),
                    imageUrl = soup.select(variable.var_imageUrl),
                )
        elif var_website == 'https://www.nytimes.com/':
            req = Request(website +th.thematic.lower()+'/', headers={'User-Agent': 'Mozilla/5.0'})
            webpage = urlopen(req).read()
            soup = BeautifulSoup(webpage,"html.parser")
            results = soup.find(id="listing")
            articles = results.find_all("div", class_="cover")
            #for each article, we bring infos related the way they are written in the website + its thematic
            for article in articles:
                Article.objects.get_or_create(
                    
                    website =  soup.select(variable.var_website).text,
                    link = soup.select(variable.var_link),
                    title = soup.select(variable.var_title),
                    date = soup.select(variable.var_date),
                    imageUrl = soup.select(variable.var_imageUrl),)
        else :
            req = Request(website +th.thematic.lower()+'/', headers={'User-Agent': 'Mozilla/5.0'})
            webpage = urlopen(req).read()
            soup = BeautifulSoup(webpage,"html.parser")
            results = soup.find(id="listing")
            articles = results.find_all("div", class_="cover")
            #for each article, we bring infos related the way they are written in the website + its thematic
            for article in articles:
                Article.objects.get_or_create(
                    
                    
                    website =  soup.select(variable.var_website).text,
                    link = soup.select(variable.var_link),
                    title = soup.select(variable.var_title),
                    date = soup.select(variable.var_date),
                    imageUrl = soup.select(variable.var_imageUrl))
                # for i in var_title[i] :
                # if var_title[i] = '(' and var_title[i+1] = ')':
                #     title = soup.select(variable.var_title[i],'(',i,')',variable.var_title[i+2])
        
    articles = Article.objects.filter(website="https://en.hespress.com/")

    context ={
            'articles': articles,
        }
    return render(request, 'api/home.html', context)