# Generated by Django 3.2.9 on 2021-12-05 22:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_article_link'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['-date']},
        ),
    ]
