from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^api/news/', views.NewsList.as_view(), name = 'news'),
    url(r'^api/comments/', views.CommentList.as_view(), name = 'comments'),
    url(r'^api/users/', views.UserList.as_view(), name = 'users'),
    url(r'^api/groups/', views.GroupList.as_view(), name = 'groups')

]
