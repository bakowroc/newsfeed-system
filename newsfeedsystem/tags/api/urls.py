from django.conf.urls import url
from tags.views import (
                    TagCreate,
                    TagList,
                    TagDetail,
                    TagDestroy,
                    TagUpdate,
                    )

urlpatterns = [
    url(r'^$', TagList.as_view(), name = 'lists'),
    url(r'^create/$', TagCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', TagDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', TagUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', TagDestroy.as_view(), name = 'destroy')
]
