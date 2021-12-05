from django.shortcuts import render
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from .models import Article
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArticleSerializer


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