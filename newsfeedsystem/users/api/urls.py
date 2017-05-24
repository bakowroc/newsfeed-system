from django.conf.urls import url
from users.views import UserList

urlpatterns = [
    url(r'^api/users/', UserList.as_view(), name = 'users'),
]
