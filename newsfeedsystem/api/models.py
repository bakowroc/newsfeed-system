from django.db import models
from django.utils import timezone

class User(models.Model):
    email = models.CharField(max_length=25)
    password = models.CharField(max_length=128)
    date = models.DateTimeField('date registered', default = timezone.now())
    group = models.ForeignKey('Group')

    def __str__(self):
        return self.email


class News(models.Model):
    title = models.CharField(max_length=20)
    desc = models.CharField(max_length=120)
    date = models.DateTimeField('date published', default = timezone.now())
    author = models.ForeignKey('User')

    def __str__(self):
        return self.title;


class Comment(models.Model):
    content = models.TextField()
    date = models.DateTimeField('date commented', default = timezone.now())
    related_news = models.ForeignKey('News')
    author = models.ForeignKey('User')

    def __str__(self):
        return self.id


class Group(models.Model):
    name = models.CharField(max_length=20)
    is_allowed_to_add_post = models.BooleanField(default=False)
    is_allowed_to_edit_post = models.BooleanField(default=False)
    is_allowed_to_drop_post = models.BooleanField(default=False)
    is_allowed_to_add_mod = models.BooleanField(default=False)
    is_allowed_to_manage = models.BooleanField(default=False)
    is_allowed_to_stat = models.BooleanField(default=False)

    def __str___(self):
        return self.name
