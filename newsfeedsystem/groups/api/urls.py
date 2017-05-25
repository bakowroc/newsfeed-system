from django.conf.urls import url
from groups.views import GroupList

urlpatterns = [
    url(r'^api/groups/', GroupList.as_view(), name = 'groups')
]
