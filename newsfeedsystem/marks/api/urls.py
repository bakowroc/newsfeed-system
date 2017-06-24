from django.conf.urls import url
from marks.views import (
                    MarkCreate,
                    MarkList,
                    MarkDetail,
                    MarkDestroy,
                    MarkUpdate,
                    )

urlpatterns = [
    url(r'^$', MarkList.as_view(), name = 'lists'),
    url(r'^create/$', MarkCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', MarkDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', MarkUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', MarkDestroy.as_view(), name = 'destroy')
]
