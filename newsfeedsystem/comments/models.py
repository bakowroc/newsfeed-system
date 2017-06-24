from django.db import models
from django.utils import timezone

from news.models import News
from django.contrib.auth.models import User

class Comment(models.Model):
    content = models.TextField(default='')
    date = models.DateTimeField('date commented', default = timezone.now)
    related_news = models.ForeignKey(News, default = '', null = True)
    author = models.ForeignKey(User, default = '', null = True)

    def __str__(self):
        return 'Comment: {}'.format(self.id)
