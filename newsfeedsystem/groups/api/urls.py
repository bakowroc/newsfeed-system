from django.conf.urls import url
from groups.views import (
                    GroupCreate,
                    GroupList,
                    GroupDetail,
                    GroupDestroy,
                    GroupUpdate,
                    )

urlpatterns = [
    url(r'^$', GroupList.as_view(), name = 'list'),
    url(r'^create/$', GroupCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', GroupDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', GroupUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', GroupDestroy.as_view(), name = 'destroy')
]
