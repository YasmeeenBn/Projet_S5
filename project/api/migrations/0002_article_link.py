# Generated by Django 3.2.9 on 2021-11-25 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='link',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
