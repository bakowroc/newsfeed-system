from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^api/', views.NewsList.as_view(), name = 'news')
]
