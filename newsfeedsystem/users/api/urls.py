from django.conf.urls import url
from users.views import UserList, UserDetail

urlpatterns = [
    url(r'^$', UserList.as_view(), name = 'lists'),
    url(r'^(?P<pk>\d+)/$', UserDetail.as_view(), name = 'details')
]
