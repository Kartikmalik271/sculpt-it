# Generated by Django 3.1.7 on 2021-03-30 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0008_auto_20210330_1858'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserArticle',
        ),
    ]