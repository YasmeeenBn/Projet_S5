from django.db import models

# Create your models here.


class Article(models.Model):
    title =  models.CharField(max_length=250, null=True, blank=False)
    date = models.CharField(max_length=250, null=True, blank=False)
    imageUrl = models.CharField(max_length=250, null=True, blank=False)
    link = models.CharField(max_length=250, null=True, blank=False)
    thematic = models.CharField(max_length=250, null=True, blank=False)
    website = models.CharField(max_length=250, null=True, blank=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date']

class Thematic(models.Model):
    thematic =  models.CharField(max_length=250, null=True, blank=False)

    def __str__(self):
        return self.thematic

