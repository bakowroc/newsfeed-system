from django.conf.urls import url
from news.views import (
                NewsCreate,
                NewsList,
                NewsDetail,
                NewsDestroy,
                NewsUpdate,
                )

urlpatterns = [
    url(r'^$', NewsList.as_view(), name = 'lists'),
    url(r'^create/$', NewsCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', NewsDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', NewsUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', NewsDestroy.as_view(), name = 'destroy')
]
