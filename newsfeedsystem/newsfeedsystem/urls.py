from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/comments/', include('comments.api.urls')),
    url(r'^api/groups/', include('groups.api.urls')),
    url(r'^api/news/', include('news.api.urls')),
    url(r'^api/users/', include('users.api.urls')),
    url(r'^', include('angular.urls'))
]

urlpatterns = format_suffix_patterns(urlpatterns)
