from django.urls import path
from . import views

from data.hespress import hespress
from data import franceinfo


urlpatterns = [
    path('', hespress.hespress, name='homepage' ),
    path('hespress/', hespress.hespress, name='hespress' ),
    path('franceinfo/', franceinfo.franceinfo, name='franceinfo' ),
    path('thematics/', hespress.thematicsHespress, name='thematics' ),
    path('export_thematics_hespress_json/', views.export_thematics_hespress_json, name='export_thematics_hespress_json'),
    path('export_csv/', views.export_csv, name='export_csv'),
    path('export_json/', views.export_json, name='export_json'),
    path('export_xml/', views.export_xml, name='export_xml'),
    path('export_xlsx/', views.export_xlsx, name='export_xlsx'),
]