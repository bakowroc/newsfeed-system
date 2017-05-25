from django.conf.urls import url
from users.views import (
                    UserCreate,
                    UserList,
                    UserDetail,
                    UserDestroy,
                    UserUpdate,
                    )

urlpatterns = [
    url(r'^$', UserList.as_view(), name = 'lists'),
    url(r'^create/$', UserCreate.as_view(), name = 'create'),
    url(r'^(?P<pk>\d+)/$', UserDetail.as_view(), name = 'details'),
    url(r'^(?P<pk>\d+)/update/$', UserUpdate.as_view(), name = 'update'),
    url(r'^(?P<pk>\d+)/destroy/$', UserDestroy.as_view(), name = 'destroy')
]
