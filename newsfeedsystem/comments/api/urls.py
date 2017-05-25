from django.conf.urls import url
from comments.views import CommentList

urlpatterns = [
    url(r'^api/comments/', CommentList.as_view(), name = 'comments')
]
