from django.conf.urls import url
from comments.views import (
                    CommentCreate,
                    CommentList,
                    CommentDetail,
                    CommentDestroy,
                    CommentUpdate,
                    )

urlpatterns = [
    url(r'^$', CommentList.as_view(), name = 'lists'),
    url(r'^create/$', CommentCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', CommentDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', CommentUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', CommentDestroy.as_view(), name = 'destroy')
]
