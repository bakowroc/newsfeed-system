from django.db import models

class News(models.Model):
    title = models.CharField(max_length=20)
    desc = models.CharField(max_length=120)
    author = models.CharField(max_length=15)

    def __str__(self):
        return self.title;
