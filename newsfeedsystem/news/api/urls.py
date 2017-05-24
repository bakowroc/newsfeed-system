from django.conf.urls import url
from news.views import NewsList

urlpatterns = [
    url(r'^api/news/$', NewsList.as_view(), name = 'news')
]
