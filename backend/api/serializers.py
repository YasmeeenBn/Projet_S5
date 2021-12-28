from rest_framework import serializers
from .models import Article, Variable

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class VariableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variable
        fields = '__all__'