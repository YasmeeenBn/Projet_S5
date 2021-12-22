from django.urls import path
from . import views

from . import hespress
from . import franceinfo
from . import newyorktimes



urlpatterns = [
    #home
    path('', hespress.hespress, name='homepage' ),
    # hespress
    path('hespress/', hespress.hespress, name='hespress' ),
    # path('hespress_test/', hespress.hespress_test, name='hespress_test' ),
    path('thematicsHespress/', hespress.thematicsHespress, name='thematicsHespress' ),
    #france info
    path('franceinfo/', franceinfo.franceinfo, name='franceinfo' ),
    path('thematicsfranceinfo/', franceinfo.thematicsfranceinfo, name='thematicsfranceinfo' ),
    # new york times
    path('newyorktimes/', newyorktimes.newyorktimes, name='newyorktimes' ),
    path('thematics_nyt/', newyorktimes.thematics_nyt, name='thematics_nyt' ),
    # h24
    # path('h24/', h24.h24, name='h24' ),
    # path('thematicsh24/', h24.thematicsh24, name='thematicsh24' ),

    #export
    path('export_thematics_hespress_json/', views.export_thematics_hespress_json, name='export_thematics_hespress_json'),
    path('export_thematics_ny_json/', views.export_thematics_ny_json, name='export_thematics_ny_json'),
    path('export_csv/', views.export_csv, name='export_csv'),
    path('export_json/', views.export_json, name='export_json'),
    path('export_xml/', views.export_xml, name='export_xml'),
    path('export_xlsx/', views.export_xlsx, name='export_xlsx'),
    path('articles/', views.articleList),
]