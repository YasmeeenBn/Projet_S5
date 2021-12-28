from django.contrib import admin
from .models import Article, Thematic, Variable
# Register your models here.

admin.site.register(Article)
admin.site.register(Thematic)
admin.site.register(Variable)