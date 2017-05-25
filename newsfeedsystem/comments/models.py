from django.db import models
from django.utils import timezone

from news.models import News
from users.models import User

class Comment(models.Model):
    content = models.TextField(default='')
    date = models.DateTimeField('date commented', default = timezone.now)
    related_news = models.ForeignKey(News, default = '')
    author = models.ForeignKey(User, default = '')

    def __str__(self):
        return self.id
