# Generated by Django 3.2.9 on 2021-12-06 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_article_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Thematic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thematic', models.CharField(max_length=250, null=True)),
            ],
        ),
    ]
