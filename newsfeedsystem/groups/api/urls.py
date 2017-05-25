from django.conf.urls import url
from groups.views import GroupList, GroupDetail

urlpatterns = [
    url(r'^$', GroupList.as_view(), name = 'list'),
    url(r'^(?P<pk>\d+)/$', GroupDetail.as_view(), name = 'details')
]
