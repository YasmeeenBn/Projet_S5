# Generated by Django 3.2.9 on 2021-12-06 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_article_website'),
    ]

    operations = [
        migrations.AddField(
            model_name='thematic',
            name='website',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
