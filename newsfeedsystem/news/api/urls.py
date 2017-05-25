from django.conf.urls import url
from news.views import NewsList, NewsDetail

urlpatterns = [
    url(r'^$', NewsList.as_view(), name = 'lists'),
    url(r'^(?P<pk>\d+)/$', NewsDetail.as_view(), name = 'details')
]
