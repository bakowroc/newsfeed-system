from django.db import models
from news.models import News

class Mark(models.Model):
    news = models.ForeignKey(News, default = '', null = True)
    value = models.IntegerField(default=0)

    def __str__(self):
        return self.id
