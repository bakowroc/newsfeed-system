from django.contrib import admin

from .models import News, Comment, User, Group

admin.site.register(News)
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(Group)
