from django.db import models
from django.utils import timezone

from groups.models import Group

class User(models.Model):
    username = models.CharField(max_length=25)
    email = models.CharField(max_length=25)
    password = models.CharField(max_length=128)
    date = models.DateTimeField('date registered', default = timezone.now)
    group = models.ForeignKey(Group, default = '')

    def __str__(self):
        return self.email
