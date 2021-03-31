from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, default='')
    lastt_name = models.CharField(max_length=100, default='')
    phone = models.CharField(max_length=11, default='')
    college = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.first_name

class UserArticle(models.Model):
   
    title = models.CharField(max_length=100, default='')
    contenttype = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=500, default='')
    look = models.CharField(max_length=100, default='')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
