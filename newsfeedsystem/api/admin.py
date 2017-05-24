from django.contrib import admin

from .models import News, Tag, Comment, User, Group

admin.site.register(News)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(User)
admin.site.register(Group)
