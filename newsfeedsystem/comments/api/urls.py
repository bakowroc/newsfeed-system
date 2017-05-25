from django.conf.urls import url
from comments.views import CommentList, CommentDetail

urlpatterns = [
    url(r'^$', CommentList.as_view(), name = 'lists'),
    url(r'^(?P<pk>\d+)/$', CommentDetail.as_view(), name = 'details')
]
