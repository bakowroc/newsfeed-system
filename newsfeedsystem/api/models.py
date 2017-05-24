from django.db import models
from django.utils import timezone

class User(models.Model):
    email = models.CharField(max_length=25)
    password = models.CharField(max_length=128)
    date = models.DateTimeField('date registered', default = timezone.now)
    group = models.ForeignKey('Group', default = '')

    def __str__(self):
        return self.email


class News(models.Model):
    title = models.CharField(max_length=20)
    desc = models.TextField(default = '')
    date = models.DateTimeField('date published', default = timezone.now)
    author = models.ForeignKey('User', default= '')
    tag = models.ForeignKey('Tag', null = True)

    def __str__(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Mark(models.Model):
    news = models.ForeignKey('News', default = '')
    value = models.IntegerField(default=0)

    def __str__(self):
        return self.id


class Comment(models.Model):
    content = models.TextField(default='')
    date = models.DateTimeField('date commented', default = timezone.now)
    related_news = models.ForeignKey('News', default = '')
    author = models.ForeignKey('User', default = '')

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

    def __str__(self):
        return self.name
