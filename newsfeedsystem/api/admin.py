from django.contrib import admin

<<<<<<< HEAD
from .models import News, Tag, Comment, User, Group
=======
from .models import News, Comment, User, Group, Tag
>>>>>>> 216ffaaafb92137ecd9a87d472e1cb3fe223a1b7

admin.site.register(News)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(User)
admin.site.register(Group)
admin.site.register(Tag)
