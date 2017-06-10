from django.db import models
from django.utils import timezone

from tags.models import Tag
from django.contrib.auth.models import User

class News(models.Model):
    title = models.CharField(max_length=20)
    desc = models.TextField(default = '')
    date = models.DateTimeField('date published', default = timezone.now)
    author = models.ForeignKey(User, default= '', null = True)
    tag = models.ForeignKey(Tag, null = True)


    def __str__(self):
        return self.title
