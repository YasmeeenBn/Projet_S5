from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='homepage' ),
    # path('articles/', views.articleList),
    path('export_csv/', views.export_csv, name='export_csv'),
    path('export_json/', views.export_json, name='export_json'),
    path('export_xml/', views.export_xml, name='export_xml'),
    # path('export_rss/', views.export, name='export_rss'),
]